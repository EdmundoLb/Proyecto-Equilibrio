import type { CollectionConfig } from 'payload'

import { slugField } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { iconField } from '../fields/icon'
import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateSiteAfterChange, revalidateSiteAfterDelete } from '../hooks/revalidateSite'

export const serviceCategories = [
  { label: 'Programa principal', value: 'programa' },
  { label: 'Otros servicios', value: 'otros' },
  { label: 'Adicciones conductuales', value: 'conductuales' },
] as const

export const Services: CollectionConfig<'services'> = {
  slug: 'services',
  labels: { singular: 'Servicio', plural: 'Servicios' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    summary: true,
    category: true,
  },
  admin: {
    defaultColumns: ['title', 'category', 'order', 'updatedAt'],
    group: 'Contenido',
    useAsTitle: 'title',
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Nombre del servicio',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contenido',
          fields: [
            {
              name: 'summary',
              type: 'textarea',
              label: 'Resumen',
              admin: { description: 'Una o dos oraciones. Se muestra en las tarjetas y listados.' },
              required: true,
            },
            {
              name: 'content',
              type: 'richText',
              label: 'Descripción completa',
              admin: { description: 'Se muestra en la página propia del servicio.' },
            },
            {
              name: 'image',
              type: 'upload',
              label: 'Imagen',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    iconField({ admin: { position: 'sidebar' } }),
    {
      name: 'category',
      type: 'select',
      label: 'Categoría',
      options: [...serviceCategories],
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Menor número = aparece primero.' },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidateSiteAfterChange],
    afterDelete: [revalidateSiteAfterDelete],
  },
}
