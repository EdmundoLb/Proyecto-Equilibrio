import type { Field, SelectField } from 'payload'

export const sectionBackgroundField: SelectField = {
  name: 'background',
  type: 'select',
  label: 'Fondo',
  defaultValue: 'white',
  options: [
    { label: 'Blanco', value: 'white' },
    { label: 'Arena (cálido)', value: 'sand' },
    { label: 'Celeste suave', value: 'light' },
    { label: 'Oscuro (índigo)', value: 'navy' },
  ],
}

export const sectionDividerField: SelectField = {
  name: 'divider',
  type: 'select',
  label: 'Ola arriba de la sección',
  defaultValue: 'none',
  options: [
    { label: 'Sin ola', value: 'none' },
    { label: 'Con ola', value: 'wave' },
  ],
  admin: { description: 'Usar con moderación: una o dos por página.' },
}

export const eyebrowField: Field = {
  name: 'eyebrow',
  type: 'text',
  label: 'Etiqueta superior',
  admin: { description: 'Texto corto en mayúsculas sobre el título. Ej.: "Nuestro enfoque".' },
}

/** Fondo + ola en una fila, para los bloques de sección */
export const sectionStyleRow: Field = {
  type: 'row',
  fields: [sectionBackgroundField, sectionDividerField],
}
