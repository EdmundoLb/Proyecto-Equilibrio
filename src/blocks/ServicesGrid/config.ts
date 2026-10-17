import type { Block } from 'payload'

import { serviceCategories } from '@/collections/Services'
import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const ServicesGrid: Block = {
  slug: 'servicesGrid',
  interfaceName: 'ServicesGridBlock',
  labels: { singular: 'Listado de servicios', plural: 'Listados de servicios' },
  fields: [
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título de la sección' },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    {
      type: 'row',
      fields: [
        {
          name: 'categories',
          type: 'select',
          label: 'Categorías a mostrar',
          hasMany: true,
          options: [...serviceCategories],
          admin: { description: 'Vacío = todas.' },
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Diseño',
          defaultValue: 'grid',
          options: [
            { label: 'Grilla pareja', value: 'grid' },
            { label: 'Destacados + lista (bento)', value: 'bento' },
          ],
          admin: { description: 'Bento: los 2 primeros servicios se muestran grandes.' },
        },
      ],
    },
    sectionStyleRow,
  ],
}
