import type { Block } from 'payload'

import { linkGroup } from '@/fields/linkGroup'

export const CtaBanner: Block = {
  slug: 'ctaBanner',
  interfaceName: 'CtaBannerBlock',
  labels: { singular: 'Llamado final (azul)', plural: 'Llamados finales (azul)' },
  fields: [
    { name: 'heading', type: 'text', label: 'Título', required: true },
    { name: 'text', type: 'textarea', label: 'Texto' },
    linkGroup({ appearances: ['accent', 'outline'], overrides: { maxRows: 1 } }),
    {
      name: 'showWhatsapp',
      type: 'checkbox',
      label: 'Mostrar botón de WhatsApp',
      defaultValue: true,
      admin: { description: 'Usa el número cargado en Configuración del sitio.' },
    },
    {
      name: 'showPhone',
      type: 'checkbox',
      label: 'Mostrar teléfono 24/7',
      defaultValue: true,
    },
  ],
}
