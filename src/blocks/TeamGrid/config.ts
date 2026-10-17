import type { Block } from 'payload'

import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const TeamGrid: Block = {
  slug: 'teamGrid',
  interfaceName: 'TeamGridBlock',
  labels: { singular: 'Equipo', plural: 'Equipo' },
  fields: [
    eyebrowField,
    {
      name: 'heading',
      type: 'text',
      label: 'Título de la sección',
      defaultValue: 'Dirección del programa',
    },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    sectionStyleRow,
  ],
}
