import type { Block } from 'payload'

import { iconField } from '@/fields/icon'
import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const InfoCards: Block = {
  slug: 'infoCards',
  interfaceName: 'InfoCardsBlock',
  labels: { singular: 'Tarjetas informativas', plural: 'Tarjetas informativas' },
  fields: [
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título de la sección' },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    {
      name: 'columns',
      type: 'select',
      label: 'Columnas',
      defaultValue: '2',
      options: [
        { label: '2', value: '2' },
        { label: '3', value: '3' },
      ],
    },
    sectionStyleRow,
    {
      name: 'cards',
      type: 'array',
      label: 'Tarjetas',
      labels: { singular: 'Tarjeta', plural: 'Tarjetas' },
      minRows: 1,
      fields: [
        iconField(),
        { name: 'title', type: 'text', label: 'Título', required: true },
        { name: 'text', type: 'textarea', label: 'Texto', required: true },
        {
          type: 'row',
          fields: [
            { name: 'linkLabel', type: 'text', label: 'Texto del enlace (opcional)' },
            {
              name: 'linkUrl',
              type: 'text',
              label: 'Dirección del enlace',
              admin: { description: 'Ej.: /programa' },
            },
          ],
        },
      ],
    },
  ],
}
