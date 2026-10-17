import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'

import { Input } from '@/components/ui/input'
import React from 'react'

import { Error, FieldLabel, fieldA11y } from '../Error'
import { Width } from '../Width'

// El form builder no tiene "tipo" para nombre o teléfono: se deduce del nombre del campo
// para ofrecer el teclado y el autocompletado correctos en el celular.
const inputHints = (name: string): React.InputHTMLAttributes<HTMLInputElement> => {
  if (/tel|phone|celular|whatsapp/i.test(name)) return { autoComplete: 'tel', inputMode: 'tel', type: 'tel' }
  if (/nombre|name/i.test(name)) return { autoComplete: 'name', type: 'text' }
  return { type: 'text' }
}

export const Text: React.FC<
  TextField & {
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
        defaultValue={defaultValue}
        id={name}
        {...inputHints(name)}
        {...fieldA11y(name, errors)}
        {...register(name, { required })}
      />
      {errors[name] && <Error name={name} />}
    </Width>
  )
}
