import type { Block } from 'payload'

import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const FeatureList: Block = {
  slug: 'featureList',
  interfaceName: 'FeatureListBlock',
  labels: { singular: 'Lista destacada', plural: 'Listas destacadas' },
  fields: [
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título de la sección' },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    {
      name: 'columns',
      type: 'select',
      label: 'Columnas',
      defaultValue: '1',
      options: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
      ],
    },
    sectionStyleRow,
    {
      name: 'items',
      type: 'array',
      label: 'Elementos',
      labels: { singular: 'Elemento', plural: 'Elementos' },
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Título (opcional)',
          admin: { description: 'Se muestra en negrita antes del texto.' },
        },
        { name: 'text', type: 'textarea', label: 'Texto', required: true },
      ],
    },
  ],
}
