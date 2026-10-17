import type { CheckboxField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { useFormContext } from 'react-hook-form'

import { Checkbox as CheckboxUi } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import React from 'react'

import { Error, fieldA11y } from '../Error'
import { Width } from '../Width'

export const Checkbox: React.FC<
  CheckboxField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  // register() solo para validar y para que el foco vaya al checkbox si falta marcarlo;
  // el valor lo maneja Radix con onCheckedChange.
  const { ref } = register(name, { required: required })
  const { setValue } = useFormContext()

  return (
    <Width width={width}>
      <div className="flex items-start gap-3">
        <CheckboxUi
          className="mt-0.5"
          defaultChecked={defaultValue}
          id={name}
          name={name}
          ref={ref}
          {...fieldA11y(name, errors)}
          onCheckedChange={(checked) => {
            setValue(name, checked === true ? true : undefined, { shouldValidate: true })
          }}
        />
        <Label className="cursor-pointer font-normal leading-relaxed" htmlFor={name}>
          {label}
          {required && (
            <span className="ml-1 text-destructive">
              <span aria-hidden>*</span>
              <span className="sr-only">(obligatorio)</span>
            </span>
          )}
        </Label>
      </div>
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
