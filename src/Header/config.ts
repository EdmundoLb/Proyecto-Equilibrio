import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Menú principal',
  admin: { group: 'Configuración' },
  access: {
    read: () => true,
  },
  fields: [
    link({
      appearances: false,
      overrides: {
        name: 'cta',
        label: 'Botón destacado',
        admin: { description: 'Botón dorado a la derecha del menú. Ej.: "Solicitar orientación".' },
      },
    }),
    {
      name: 'navItems',
      label: 'Enlaces del menú',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
