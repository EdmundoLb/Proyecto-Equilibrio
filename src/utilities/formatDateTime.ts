// Fecha larga en español de Costa Rica, ej. "17 de octubre de 2026"
const dateFormatter = new Intl.DateTimeFormat('es-CR', {
  day: 'numeric',
  month: 'long',
  timeZone: 'America/Costa_Rica',
  year: 'numeric',
})

export const formatDateTime = (timestamp: string): string =>
  dateFormatter.format(timestamp ? new Date(timestamp) : new Date())
