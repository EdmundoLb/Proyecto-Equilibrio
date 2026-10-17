import type { CountryField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl } from 'react-hook-form'

import React from 'react'

import { SelectControl } from '../Select'
import { countryOptions } from './options'

// Nombres de países en español (Intl), ordenados alfabéticamente y con Costa Rica primero
const regionNames = new Intl.DisplayNames(['es'], { type: 'region' })
const spanishCountryOptions = countryOptions
  .map(({ label, value }) => ({ label: regionNames.of(value) ?? label, value }))
  .sort((a, b) => (a.value === 'CR' ? -1 : b.value === 'CR' ? 1 : a.label.localeCompare(b.label, 'es')))

export const Country: React.FC<
  CountryField & {
    control: Control
    errors: Partial<FieldErrorsImpl>
  }
> = (props) => <SelectControl options={spanishCountryOptions} {...props} />
