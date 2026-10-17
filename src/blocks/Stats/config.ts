import type { Block } from 'payload'

import { sectionStyleRow } from '@/fields/sectionBackground'

export const Stats: Block = {
  slug: 'stats',
  interfaceName: 'StatsBlock',
  labels: { singular: 'Cifras', plural: 'Cifras' },
  fields: [
    sectionStyleRow,
    {
      name: 'items',
      type: 'array',
      label: 'Cifras',
      labels: { singular: 'Cifra', plural: 'Cifras' },
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'value', type: 'text', label: 'Valor', required: true, admin: { description: 'Ej.: 25+' } },
            { name: 'label', type: 'text', label: 'Descripción', required: true },
          ],
        },
      ],
    },
  ],
}
