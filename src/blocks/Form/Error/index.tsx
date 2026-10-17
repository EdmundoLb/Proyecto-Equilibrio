'use client'

import { CircleAlert } from 'lucide-react'
import * as React from 'react'
import type { FieldErrorsImpl } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import { Label } from '@/components/ui/label'

export const errorId = (name: string) => `${name}-error`

/** aria-invalid + aria-describedby para conectar el campo con su mensaje de error */
export const fieldA11y = (name: string, errors: Partial<FieldErrorsImpl>) =>
  errors[name]
    ? { 'aria-describedby': errorId(name), 'aria-invalid': true as const }
    : { 'aria-invalid': false as const }

export const FieldLabel: React.FC<{
  children?: React.ReactNode
  htmlFor: string
  required?: boolean | null
}> = ({ children, htmlFor, required }) => (
  <Label className="mb-2 block" htmlFor={htmlFor}>
    {children}
    {required ? (
      <span className="ml-1 text-destructive">
        <span aria-hidden>*</span>
        <span className="sr-only">(obligatorio)</span>
      </span>
    ) : (
      <span className="ml-1 font-normal text-muted-foreground">(opcional)</span>
    )}
  </Label>
)

export const Error = ({ name }: { name: string }) => {
  const {
    formState: { errors },
  } = useFormContext()
  const message = errors[name]?.message
  return (
    <p className="mt-2 flex items-center gap-1.5 text-sm font-medium text-destructive" id={errorId(name)} role="alert">
      <CircleAlert aria-hidden className="size-4 shrink-0" />
      {typeof message === 'string' && message ? message : 'Este campo es obligatorio.'}
    </p>
  )
}
