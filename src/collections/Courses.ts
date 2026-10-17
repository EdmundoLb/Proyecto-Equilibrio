import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { revalidateSiteAfterChange, revalidateSiteAfterDelete } from '../hooks/revalidateSite'

export const courseModalities = [
  { label: 'Virtual', value: 'virtual' },
  { label: 'Presencial', value: 'presencial' },
  { label: 'Híbrido', value: 'hibrido' },
] as const

// Cursos del Instituto Equilibrio (los que hoy están en ASCAD se cargan aquí desde el panel)
export const Courses: CollectionConfig<'courses'> = {
  slug: 'courses',
  labels: { singular: 'Curso', plural: 'Cursos' },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'area', 'modality', 'active', 'order'],
    description: 'Cursos que se muestran en la página del Instituto Equilibrio.',
    group: 'Contenido',
    useAsTitle: 'title',
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', label: 'Nombre del curso', required: true },
    {
      type: 'row',
      fields: [
        {
          name: 'area',
          type: 'text',
          label: 'Área',
          admin: { description: 'Ej.: Consejería en adicciones' },
        },
        { name: 'modality', type: 'select', label: 'Modalidad', options: [...courseModalities] },
        { name: 'duration', type: 'text', label: 'Duración', admin: { description: 'Ej.: 40 horas' } },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      label: 'Descripción',
      required: true,
      admin: { description: 'Dos o tres oraciones. Se muestra en la tarjeta del curso.' },
    },
    { name: 'image', type: 'upload', label: 'Imagen', relationTo: 'media' },
    {
      type: 'row',
      fields: [
        {
          name: 'enrollUrl',
          type: 'text',
          label: 'Enlace de inscripción o información',
          admin: { description: 'Opcional. Si está vacío, el botón abre WhatsApp con el nombre del curso.' },
        },
        { name: 'enrollLabel', type: 'text', label: 'Texto del botón', defaultValue: 'Más información' },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      label: 'Mostrar en el sitio',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Orden',
      defaultValue: 0,
      admin: { position: 'sidebar', description: 'Menor número = aparece primero.' },
    },
  ],
  hooks: {
    afterChange: [revalidateSiteAfterChange],
    afterDelete: [revalidateSiteAfterDelete],
  },
}
