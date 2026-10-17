import type { Metadata } from 'next'

import type { Media, Page, Post, Service, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

export const SITE_NAME = 'Proyecto Equilibrio'
export const HOME_TITLE = `${SITE_NAME} | Recuperación de adicciones en Costa Rica`
export const DEFAULT_OG_IMAGE = '/og'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + DEFAULT_OG_IMAGE

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl = image.sizes?.og?.url

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

// El plugin SEO ya guarda títulos con " | Proyecto Equilibrio": se quita para que la
// plantilla del layout (title.template) no lo duplique.
const stripSiteName = (title: string) => title.replace(/\s*[|–-]\s*Proyecto Equilibrio\s*$/i, '')

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | Partial<Service> | null
  /** Ruta pública del documento, ej. "/servicios/terapia-familiar". Se usa para og:url y canonical. */
  path: string
}): Promise<Metadata> => {
  const { doc, path } = args

  const ogImage = getImageURL(doc?.meta?.image)
  const rawTitle = doc?.meta?.title || doc?.title
  const title = rawTitle ? stripSiteName(rawTitle) : undefined
  // En la home (o sin título) va el nombre completo del sitio; el resto pasa por title.template
  const fullTitle = path === '/' || !title ? HOME_TITLE : `${title} | ${SITE_NAME}`

  return {
    alternates: { canonical: path },
    description: doc?.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc?.meta?.description || '',
      images: [{ url: ogImage }],
      title: fullTitle,
      url: path,
    }),
    title: path === '/' || !title ? { absolute: HOME_TITLE } : title,
  }
}
