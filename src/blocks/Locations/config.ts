import type { Block } from 'payload'

import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const LocationsBlock: Block = {
  slug: 'locationsBlock',
  interfaceName: 'LocationsBlock',
  labels: { singular: 'Sedes', plural: 'Sedes' },
  fields: [
    eyebrowField,
    {
      name: 'heading',
      type: 'text',
      label: 'Título de la sección',
      defaultValue: 'Nuestras sedes',
    },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    sectionStyleRow,
  ],
}
