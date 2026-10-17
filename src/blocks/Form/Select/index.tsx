import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import {
  Select as SelectComponent,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import React from 'react'
import { Controller } from 'react-hook-form'

import { Error, FieldLabel, fieldA11y } from '../Error'
import { Width } from '../Width'

type Option = { label: string; value: string }

/** Select accesible compartido por los campos Select, Country y State */
export const SelectControl: React.FC<{
  control: Control
  defaultValue?: string | null
  errors: Partial<FieldErrorsImpl>
  label?: string | null
  name: string
  options: Option[]
  required?: boolean | null
  width?: number | string | null
}> = ({ control, defaultValue, errors, label, name, options, required, width }) => (
  <Width width={width ?? undefined}>
    <FieldLabel htmlFor={name} required={required}>
      {label}
    </FieldLabel>
    <Controller
      control={control}
      defaultValue={defaultValue ?? ''}
      name={name}
      render={({ field: { onBlur, onChange, ref, value } }) => {
        const controlledValue = options.find((t) => t.value === value)

        return (
          <SelectComponent onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
            <SelectTrigger className="w-full" id={name} onBlur={onBlur} ref={ref} {...fieldA11y(name, errors)}>
              <SelectValue placeholder="Seleccione una opción" />
            </SelectTrigger>
            <SelectContent>
              {options.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectComponent>
        )
      }}
      rules={{ required: required ? 'Seleccione una opción.' : false }}
    />
    {errors[name] && <Error name={name} />}
  </Width>
)

export const Select: React.FC<
  SelectField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = ({ options, ...props }) => <SelectControl options={options} {...props} />
