import type { SiteSetting } from '@/payload-types'

/**
 * Arma el enlace wa.me a partir de la configuración del sitio, o null si no hay número.
 * `message` reemplaza el mensaje inicial configurado (p. ej. el mensaje propio de cada programa).
 */
export const whatsappHref = (
  settings?: Pick<SiteSetting, 'whatsapp' | 'whatsappMessage'> | null,
  message?: string | null,
): string | null => {
  const number = settings?.whatsapp?.replace(/\D/g, '')
  if (!number) return null

  const text = message || settings?.whatsappMessage

  return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`
}
