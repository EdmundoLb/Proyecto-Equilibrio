import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateSiteAfterChange, revalidateSiteAfterDelete } from '../hooks/revalidateSite'

export const Locations: CollectionConfig<'locations'> = {
  slug: 'locations',
  labels: { singular: 'Sede', plural: 'Sedes' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['name', 'place', 'order'],
    group: 'Contenido',
    useAsTitle: 'name',
  },
  defaultSort: 'order',
  fields: [
    {
      type: 'row',
      fields: [
        { name: 'name', type: 'text', label: 'Sede', required: true, admin: { description: 'Ej.: San José' } },
        { name: 'place', type: 'text', label: 'Lugar', admin: { description: 'Ej.: Clínica Burstin' } },
      ],
    },
    { name: 'address', type: 'textarea', label: 'Dirección' },
    {
      name: 'reference',
      type: 'textarea',
      label: 'Referencia',
      admin: { description: 'Ej.: Costado norte del Hospital Clínica Bíblica.' },
    },
    { name: 'phone', type: 'text', label: 'Teléfono' },
    {
      name: 'mapUrl',
      type: 'text',
      label: 'Enlace de Google Maps',
      admin: { description: 'Pegue el enlace "Compartir" de Google Maps.' },
    },
    {
      name: 'wazeUrl',
      type: 'text',
      label: 'Enlace de Waze',
    },
    { name: 'image', type: 'upload', label: 'Foto de la sede', relationTo: 'media' },
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
