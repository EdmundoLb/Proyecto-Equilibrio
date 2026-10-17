import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'Tratamiento y recuperación ambulatoria de adicciones en Costa Rica. Programa receptivo al trauma.',
  images: [
    {
      url: `${getServerSideURL()}/og`,
    },
  ],
  siteName: 'Proyecto Equilibrio',
  title: 'Proyecto Equilibrio',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
