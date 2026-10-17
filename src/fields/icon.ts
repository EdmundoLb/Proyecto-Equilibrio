import type { SelectField } from 'payload'

// Íconos disponibles en el panel. El valor es la clave del mapa en src/components/Icon.
export const iconOptions = [
  { label: 'Corazón', value: 'heart' },
  { label: 'Manos / apoyo', value: 'handHeart' },
  { label: 'Personas', value: 'users' },
  { label: 'Familia', value: 'family' },
  { label: 'Conversación', value: 'chat' },
  { label: 'Teléfono', value: 'phone' },
  { label: 'Estetoscopio', value: 'stethoscope' },
  { label: 'Cerebro / salud mental', value: 'brain' },
  { label: 'Escudo / seguridad', value: 'shield' },
  { label: 'Brújula / orientación', value: 'compass' },
  { label: 'Ruta / camino', value: 'route' },
  { label: 'Brote / crecimiento', value: 'sprout' },
  { label: 'Calendario', value: 'calendar' },
  { label: 'Portapapeles / plan', value: 'clipboard' },
  { label: 'Libro / educación', value: 'book' },
  { label: 'Casa', value: 'home' },
  { label: 'Edificio / institución', value: 'building' },
  { label: 'Hospital', value: 'hospital' },
  { label: 'Salvavidas', value: 'lifebuoy' },
  { label: 'Celular / digital', value: 'smartphone' },
  { label: 'Buscar / detección', value: 'search' },
  { label: 'Repetir / recaída', value: 'refresh' },
  { label: 'Sol / bienestar', value: 'sun' },
  { label: 'Estrella', value: 'star' },
] as const

export type IconName = (typeof iconOptions)[number]['value']

export const iconField = ({ admin }: { admin?: SelectField['admin'] } = {}): SelectField => ({
  name: 'icon',
  type: 'select',
  label: 'Ícono',
  options: iconOptions.map((o) => ({ ...o })),
  admin,
})
