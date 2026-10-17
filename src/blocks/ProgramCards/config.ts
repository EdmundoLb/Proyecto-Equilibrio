import type { Block } from 'payload'

import { iconField } from '@/fields/icon'
import { eyebrowField, sectionStyleRow } from '@/fields/sectionBackground'

export const ProgramCards: Block = {
  slug: 'programCards',
  interfaceName: 'ProgramCardsBlock',
  labels: { singular: 'Tarjetas de programas', plural: 'Tarjetas de programas' },
  fields: [
    {
      name: 'anchorId',
      type: 'text',
      label: 'Ancla',
      admin: {
        description:
          'Opcional. Permite enlazar directo a esta sección. Ej.: "colegios" → /programas-empresas-colegios#colegios',
      },
    },
    eyebrowField,
    { name: 'heading', type: 'text', label: 'Título de la sección' },
    { name: 'intro', type: 'textarea', label: 'Introducción' },
    sectionStyleRow,
    {
      name: 'items',
      type: 'array',
      label: 'Programas',
      labels: { singular: 'Programa', plural: 'Programas' },
      minRows: 1,
      admin: { initCollapsed: true },
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', label: 'Etiqueta', admin: { description: 'Ej.: "Pilar 1"' } },
            iconField(),
          ],
        },
        { name: 'title', type: 'text', label: 'Título', required: true },
        { name: 'subtitle', type: 'textarea', label: 'Subtítulo de la tarjeta' },
        { name: 'description', type: 'textarea', label: 'Descripción' },
        { name: 'strategies', type: 'textarea', label: 'Estrategias' },
        { name: 'modality', type: 'textarea', label: 'Modalidad' },
        {
          name: 'programs',
          type: 'array',
          label: 'Subprogramas',
          labels: { singular: 'Subprograma', plural: 'Subprogramas' },
          admin: {
            initCollapsed: true,
            description: 'Opcional. Se muestran dentro de la tarjeta en una lista desplegable.',
          },
          fields: [
            { name: 'title', type: 'text', label: 'Título', required: true },
            { name: 'description', type: 'textarea', label: 'Descripción' },
            { name: 'strategies', type: 'textarea', label: 'Estrategias' },
          ],
        },
        { name: 'note', type: 'textarea', label: 'Nota al pie de la tarjeta' },
        {
          type: 'row',
          fields: [
            { name: 'ctaLabel', type: 'text', label: 'Texto del botón', required: true },
            {
              name: 'whatsappMessage',
              type: 'textarea',
              label: 'Mensaje de WhatsApp',
              required: true,
              admin: { description: 'Se precarga al abrir WhatsApp desde este botón.' },
            },
          ],
        },
      ],
    },
  ],
}
