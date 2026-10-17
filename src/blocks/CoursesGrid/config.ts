import type { Block } from 'payload'

import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const CoursesGrid: Block = {
  slug: 'coursesGrid',
  interfaceName: 'CoursesGridBlock',
  labels: { singular: 'Listado de cursos', plural: 'Listados de cursos' },
  fields: [
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título de la sección' },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    {
      name: 'emptyText',
      type: 'textarea',
      label: 'Texto cuando no hay cursos',
      defaultValue:
        'Muy pronto publicaremos aquí la oferta de cursos del Instituto Equilibrio. Escríbanos para recibir información.',
    },
    sectionStyleRow,
  ],
}
