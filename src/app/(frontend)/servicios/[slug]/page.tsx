import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { getPayload } from 'payload'
import React, { cache } from 'react'

import { CMSLink } from '@/components/Link'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import RichText from '@/components/RichText'
import { serviceCategories } from '@/collections/Services'
import { generateMeta } from '@/utilities/generateMeta'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const services = await payload.find({
    collection: 'services',
    limit: 1000,
    pagination: false,
    select: { slug: true },
  })

  return services.docs.map(({ slug }) => ({ slug }))
}

type Args = {
  params: Promise<{ slug?: string }>
}

export default async function ServicePage({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const service = await queryServiceBySlug({ slug: decodedSlug })

  if (!service) return <PayloadRedirects url={`/servicios/${decodedSlug}`} />

  const categoryLabel = serviceCategories.find((c) => c.value === service.category)?.label

  return (
    <article>
      <div className="bg-card">
        <div className="container py-14 md:py-20">
          <Link
            className="inline-flex items-center gap-1 text-sm font-semibold text-primary/80 hover:text-primary"
            href="/servicios"
          >
            <ArrowLeft aria-hidden className="size-4" />
            Todos los servicios
          </Link>
          {categoryLabel && (
            <p className="mt-6 text-sm font-bold uppercase tracking-wider text-eyebrow">
              {categoryLabel}
            </p>
          )}
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold text-primary md:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-foreground/80">{service.summary}</p>
        </div>
      </div>

      <div className="container py-14">
        {service.content ? (
          <RichText className="mx-0 mb-12" data={service.content} enableGutter={false} />
        ) : null}

        <aside className="flex flex-col items-start gap-4 rounded-2xl bg-card p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-primary">¿Desea saber si es adecuado para usted?</h2>
            <p className="mt-1 text-foreground/80">
              Conversemos de forma confidencial y sin compromiso.
            </p>
          </div>
          <CMSLink appearance="accent" label="Solicitar orientación" size="lg" type="custom" url="/contacto" />
        </aside>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const service = await queryServiceBySlug({ slug: decodeURIComponent(slug) })

  return generateMeta({ doc: service, path: `/servicios/${slug}` })
}

const queryServiceBySlug = cache(async ({ slug }: { slug: string }) => {
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'services',
    limit: 1,
    pagination: false,
    where: { slug: { equals: slug } },
  })

  return result.docs?.[0] || null
})
