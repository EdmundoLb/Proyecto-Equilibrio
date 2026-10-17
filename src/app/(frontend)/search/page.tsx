import type { Metadata } from 'next/types'

import { CollectionArchive } from '@/components/CollectionArchive'
import { CMSLink } from '@/components/Link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import { Search } from '@/search/Component'
import { CardPostData } from '@/components/Card'
import type { Search as SearchDoc } from '@/payload-types'

type Args = {
  searchParams: Promise<{
    q?: string
  }>
}

// Cada resultado apunta a la ruta pública de su colección de origen
const resultHref = (relationTo: SearchDoc['doc']['relationTo'], slug?: string | null) => {
  if (relationTo === 'posts') return `/posts/${slug}`
  if (relationTo === 'services') return `/servicios/${slug}`
  return slug === 'home' ? '/' : `/${slug}`
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query = '' } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const results = query
    ? await payload.find({
        collection: 'search',
        depth: 1,
        limit: 12,
        select: {
          title: true,
          slug: true,
          categories: true,
          meta: true,
          doc: true,
        },
        // pagination: false reduces overhead if you don't need totalDocs
        pagination: false,
        where: {
          or: [
            { title: { like: query } },
            { 'meta.description': { like: query } },
            { 'meta.title': { like: query } },
            { slug: { like: query } },
          ],
        },
      })
    : null

  const docs: CardPostData[] = (results?.docs || []).map((result) => ({
    ...(result as unknown as CardPostData),
    href: resultHref(result.doc.relationTo, result.slug),
  }))

  return (
    <div className="py-16 md:py-24">
      <div className="container mb-12 max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold text-primary md:text-5xl">Buscar</h1>
        <p className="mt-4 text-lg text-muted-foreground">Programas, servicios, preguntas frecuentes y recursos.</p>
        <div className="mt-8">
          <Search initialQuery={query} />
        </div>
      </div>

      <p aria-live="polite" className="container mb-8 text-center font-semibold text-muted-foreground">
        {query &&
          (docs.length > 0
            ? `${docs.length} ${docs.length === 1 ? 'resultado' : 'resultados'} para “${query}”`
            : '')}
      </p>

      {docs.length > 0 && <CollectionArchive posts={docs} />}

      {query && docs.length === 0 && (
        <div className="container max-w-2xl rounded-3xl bg-card p-8 text-center md:p-10">
          <h2 className="text-2xl font-extrabold text-primary">No encontramos resultados para “{query}”</h2>
          <p className="mt-3 text-foreground/80">
            Pruebe con otra palabra o escríbanos: con gusto le orientamos de forma confidencial.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <CMSLink appearance="accent" label="Solicitar orientación" type="custom" url="/contacto" />
            <CMSLink appearance="outline" label="Preguntas frecuentes" type="custom" url="/preguntas-frecuentes" />
          </div>
        </div>
      )}
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    robots: { follow: true, index: false },
    title: 'Buscar',
  }
}
