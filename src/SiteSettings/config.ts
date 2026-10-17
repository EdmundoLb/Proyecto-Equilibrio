import type { GlobalConfig } from 'payload'

import { revalidateSiteGlobal } from '@/hooks/revalidateSite'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Configuración del sitio',
  admin: { group: 'Configuración' },
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Contacto',
          fields: [
            {
              name: 'phones',
              type: 'array',
              label: 'Teléfonos',
              labels: { singular: 'Teléfono', plural: 'Teléfonos' },
              fields: [{ name: 'number', type: 'text', label: 'Número', required: true }],
            },
            {
              name: 'whatsapp',
              type: 'text',
              label: 'WhatsApp',
              admin: {
                description:
                  'Número con código de país, solo dígitos. Ej.: 50671685868. Si está vacío no se muestra el botón.',
              },
            },
            {
              name: 'whatsappMessage',
              type: 'text',
              label: 'Mensaje inicial de WhatsApp',
              defaultValue: 'Hola, quisiera información sobre el programa de Equilibrio.',
            },
            {
              name: 'emails',
              type: 'array',
              label: 'Correos',
              labels: { singular: 'Correo', plural: 'Correos' },
              fields: [{ name: 'email', type: 'email', label: 'Correo', required: true }],
            },
            { name: 'hours', type: 'text', label: 'Horario', defaultValue: 'Lunes a domingo · 24/7' },
          ],
        },
        {
          label: 'Aviso de emergencia',
          fields: [
            {
              name: 'crisisEnabled',
              type: 'checkbox',
              label: 'Mostrar barra de emergencia en todo el sitio',
              defaultValue: true,
            },
            {
              name: 'crisisText',
              type: 'text',
              label: 'Texto',
              defaultValue: '¿Está en peligro inmediato o ante una intoxicación?',
            },
          ],
        },
        {
          label: 'Marca',
          fields: [
            { name: 'tagline', type: 'text', label: 'Lema', defaultValue: 'Acompañamos tu camino hacia el bienestar' },
            {
              name: 'footerAbout',
              type: 'textarea',
              label: 'Texto del pie de página',
            },
          ],
        },
        {
          label: 'Redes sociales',
          fields: [
            { name: 'facebook', type: 'text', label: 'Facebook (URL)' },
            { name: 'instagram', type: 'text', label: 'Instagram (URL)' },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateSiteGlobal],
  },
}
