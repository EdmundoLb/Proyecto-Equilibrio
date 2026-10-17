import type { Block } from 'payload'

import { sectionStyleRow } from '@/fields/sectionBackground'

export const Quote: Block = {
  slug: 'quote',
  interfaceName: 'QuoteBlock',
  labels: { singular: 'Frase destacada', plural: 'Frases destacadas' },
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      label: 'Frase',
      required: true,
      admin: {
        description:
          'Para testimonios, usá solo frases reales y autorizadas por la persona (pueden ser anónimas).',
      },
    },
    { name: 'author', type: 'text', label: 'Autor (opcional)', admin: { description: 'Ej.: M., 34 años' } },
    sectionStyleRow,
  ],
}
