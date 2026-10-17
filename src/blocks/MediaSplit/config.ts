import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'
import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const MediaSplit: Block = {
  slug: 'mediaSplit',
  interfaceName: 'MediaSplitBlock',
  labels: { singular: 'Imagen + texto', plural: 'Imagen + texto' },
  fields: [
    { name: 'image', type: 'upload', label: 'Imagen', relationTo: 'media', required: true },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Posición de la imagen',
      defaultValue: 'left',
      options: [
        { label: 'Izquierda', value: 'left' },
        { label: 'Derecha', value: 'right' },
      ],
    },
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título', required: true },
    { name: 'text', type: 'textarea', label: 'Texto' },
    {
      name: 'bullets',
      type: 'array',
      label: 'Puntos destacados',
      labels: { singular: 'Punto', plural: 'Puntos' },
      fields: [{ name: 'text', type: 'text', label: 'Texto', required: true }],
    },
    linkGroup({ appearances: ['default', 'outline', 'accent'], overrides: { maxRows: 2 } }),
    sectionStyleRow,
  ],
}
