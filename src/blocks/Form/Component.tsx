'use client'
import type { FormFieldBlock, Form as FormType } from '@payloadcms/plugin-form-builder/types'

import { CircleAlert, LoaderCircle, Lock } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

import { fields } from './fields'
import { getClientSideURL } from '@/utilities/getURL'

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean
  form: FormType
  introContent?: DefaultTypedEditorState
}

export const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {
  const {
    enableIntro,
    form: formFromProps,
    form: { id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel } = {},
    introContent,
  } = props

  const formMethods = useForm({
    defaultValues: formFromProps.fields,
  })
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()
  const statusRef = useRef<HTMLDivElement>(null)

  // Al enviar o fallar, el foco va al mensaje para que los lectores de pantalla lo anuncien
  // y nadie quede frente a un formulario que desapareció sin explicación.
  useEffect(() => {
    if (hasSubmitted || error) statusRef.current?.focus()
  }, [hasSubmitted, error])

  const onSubmit = useCallback(
    (data: FormFieldBlock[]) => {
      const submitForm = async () => {
        setError(undefined)
        setIsLoading(true)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        try {
          const req = await fetch(`${getClientSideURL()}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          if (req.status >= 400) {
            console.warn(await req.json().catch(() => undefined))
            setIsLoading(false)
            setError({ message: 'No pudimos enviar su consulta.', status: String(req.status) })
            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({ message: 'No pudimos enviar su consulta. Revise su conexión a internet.' })
        }
      }

      void submitForm()
    },
    [router, formID, redirect, confirmationType],
  )

  return (
    <div className="container lg:max-w-[48rem]">
      {enableIntro && introContent && !hasSubmitted && (
        <RichText className="mb-8 lg:mb-12" data={introContent} enableGutter={false} />
      )}
      <div className="rounded-3xl bg-background p-6 shadow-sm ring-1 ring-border md:p-10">
        <FormProvider {...formMethods}>
          {hasSubmitted && confirmationType === 'message' && (
            <div className="focus:outline-none" ref={statusRef} role="status" tabIndex={-1}>
              <RichText data={confirmationMessage} enableGutter={false} />
            </div>
          )}
          {error && (
            <div
              className="mb-8 flex gap-3 rounded-2xl bg-error p-4 text-foreground focus:outline-none"
              ref={statusRef}
              role="alert"
              tabIndex={-1}
            >
              <CircleAlert aria-hidden className="mt-0.5 size-5 shrink-0 text-destructive" />
              <p>
                <strong>{error.message}</strong> Intente de nuevo en unos minutos o escríbanos por
                WhatsApp con el botón verde: le respondemos igual de rápido.
              </p>
            </div>
          )}
          {!hasSubmitted && (
            <form id={formID} noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-8 flex flex-wrap gap-6">
                {formFromProps &&
                  formFromProps.fields &&
                  formFromProps.fields?.map((field, index) => {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    const Field: React.FC<any> = fields?.[field.blockType as keyof typeof fields]
                    if (Field) {
                      return (
                        <Field
                          form={formFromProps}
                          key={index}
                          {...field}
                          {...formMethods}
                          control={control}
                          errors={errors}
                          register={register}
                        />
                      )
                    }
                    return null
                  })}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <Button disabled={isLoading} form={formID} size="lg" type="submit" variant="accent">
                  {isLoading && <LoaderCircle aria-hidden className="size-5 animate-spin" />}
                  {isLoading ? 'Enviando…' : submitButtonLabel || 'Enviar'}
                </Button>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock aria-hidden className="size-4 shrink-0" />
                  <span>
                    Toda consulta es confidencial.{' '}
                    <Link className="font-semibold text-primary underline underline-offset-4" href="/privacidad">
                      Política de privacidad
                    </Link>
                  </span>
                </p>
              </div>
              <p aria-live="polite" className="sr-only">
                {isLoading ? 'Enviando su consulta…' : ''}
              </p>
            </form>
          )}
        </FormProvider>
      </div>
    </div>
  )
}
