import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Tipo',
      options: [
        {
          label: 'Equilibrio (marca)',
          value: 'equilibrio',
        },
        {
          label: 'Sin hero',
          value: 'none',
        },
        {
          label: 'Imagen a pantalla completa',
          value: 'highImpact',
        },
        {
          label: 'Texto con imagen debajo',
          value: 'mediumImpact',
        },
        {
          label: 'Solo texto (páginas interiores)',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'equilibrioMedia',
      type: 'upload',
      label: 'Imagen (opcional)',
      admin: {
        condition: (_, { type } = {}) => type === 'equilibrio',
      },
      relationTo: 'media',
    },
    {
      name: 'showSeal',
      type: 'checkbox',
      label: 'Mostrar sello "Programa receptivo al trauma"',
      defaultValue: true,
      admin: {
        condition: (_, { type } = {}) => type === 'equilibrio',
      },
    },
  ],
  label: false,
}
