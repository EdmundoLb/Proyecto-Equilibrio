import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateSiteAfterChange, revalidateSiteAfterDelete } from '../hooks/revalidateSite'

export const Team: CollectionConfig<'team'> = {
  slug: 'team',
  labels: { singular: 'Integrante del equipo', plural: 'Equipo' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'role', 'order'],
    group: 'Contenido',
    useAsTitle: 'name',
  },
  defaultSort: 'order',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Nombre', required: true },
        {
          name: 'credentials',
          type: 'text',
          label: 'Título o credencial',
          admin: { description: 'Ej.: Dra., CCAD IV' },
        },
      ],
    },
    { name: 'role', type: 'text', label: 'Cargo', required: true },
    {
      name: 'focus',
      type: 'text',
      label: 'Enfoque',
      admin: { description: 'Palabras clave separadas por "·". Ej.: Liderazgo clínico · enfoque humano' },
    },
    { name: 'bio', type: 'textarea', label: 'Biografía breve' },
    {
      name: 'quote',
      type: 'textarea',
      label: 'Frase personal (opcional)',
      admin: { description: 'Una frase corta sobre su forma de acompañar. Se muestra entre comillas.' },
    },
    { name: 'photo', type: 'upload', label: 'Foto', relationTo: 'media' },
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
  hooks: {
    afterChange: [revalidateSiteAfterChange],
    afterDelete: [revalidateSiteAfterDelete],
  },
}
