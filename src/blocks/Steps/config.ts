import type { Block } from 'payload'

import { iconField } from '@/fields/icon'
import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const Steps: Block = {
  slug: 'steps',
  interfaceName: 'StepsBlock',
  labels: { singular: 'Proceso / etapas', plural: 'Procesos / etapas' },
  fields: [
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título de la sección' },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    {
      name: 'variant',
      type: 'select',
      label: 'Diseño',
      defaultValue: 'steps',
      options: [
        { label: 'Pasos en fila (numerados)', value: 'steps' },
        { label: 'Línea de tiempo (etapas)', value: 'timeline' },
      ],
    },
    sectionStyleRow,
    {
      name: 'items',
      type: 'array',
      label: 'Pasos',
      labels: { singular: 'Paso', plural: 'Pasos' },
      minRows: 2,
      maxRows: 6,
      fields: [
        iconField(),
        { name: 'title', type: 'text', label: 'Título', required: true },
        { name: 'text', type: 'textarea', label: 'Texto', required: true },
      ],
    },
    {
      name: 'note',
      type: 'textarea',
      label: 'Nota al pie (opcional)',
    },
  ],
}
