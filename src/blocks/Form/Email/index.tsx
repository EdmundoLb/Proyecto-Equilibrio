import type { EmailField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import React from 'react'

import { Error, FieldLabel, fieldA11y } from '../Error'
import { Width } from '../Width'

export const Email: React.FC<
  EmailField & {
    errors: Partial<FieldErrorsImpl>
    register: UseFormRegister<FieldValues>
  }
> = ({ name, defaultValue, errors, label, register, required, width }) => {
  return (
    <Width width={width}>
      <FieldLabel htmlFor={name} required={required}>
        {label}
      </FieldLabel>
      <Input
        autoComplete="email"
        defaultValue={defaultValue}
        id={name}
        inputMode="email"
        type="email"
        {...fieldA11y(name, errors)}
        {...register(name, {
          pattern: { message: 'Revise el correo: debería verse como nombre@ejemplo.com', value: /^\S[^\s@]*@\S+\.\S+$/ },
          required,
        })}
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
