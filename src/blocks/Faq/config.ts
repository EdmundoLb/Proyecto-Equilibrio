import type { Block } from 'payload'

import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const Faq: Block = {
  slug: 'faq',
  interfaceName: 'FaqBlock',
  labels: { singular: 'Preguntas frecuentes', plural: 'Preguntas frecuentes' },
  fields: [
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título', defaultValue: 'Preguntas frecuentes' },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    sectionStyleRow,
    {
      name: 'items',
      type: 'array',
      label: 'Preguntas',
      labels: { singular: 'Pregunta', plural: 'Preguntas' },
      minRows: 1,
      fields: [
        { name: 'question', type: 'text', label: 'Pregunta', required: true },
        { name: 'answer', type: 'textarea', label: 'Respuesta', required: true },
      ],
    },
  ],
}
