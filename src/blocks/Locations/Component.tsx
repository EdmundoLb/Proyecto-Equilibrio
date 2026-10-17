import configPromise from '@payload-config'
import { MapPin, Navigation, Phone } from 'lucide-react'
import { getPayload } from 'payload'
import React from 'react'

import type { Location, LocationsBlock as LocationsBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'
import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/utilities/ui'

const MapLinks: React.FC<{ location: Location }> = ({ location }) => {
  if (!location.wazeUrl && !location.mapUrl) return null

  return (
    <div className="mt-5 flex flex-wrap gap-3">
      {location.wazeUrl && (
        <a
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          href={location.wazeUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Navigation aria-hidden className="size-4" />
          Abrir en Waze
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      )}
      {location.mapUrl && (
        <a
          className="inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-primary ring-1 ring-border hover:bg-card"
          href={location.mapUrl}
          rel="noopener noreferrer"
          target="_blank"
        >
          <MapPin aria-hidden className="size-4" />
          Google Maps
          <span className="sr-only"> (se abre en una pestaña nueva)</span>
        </a>
      )}
    </div>
  )
}

const LocationDetails: React.FC<{ location: Location; large?: boolean }> = ({ location, large }) => (
  <>
    <h3 className={cn('flex items-center gap-2 font-extrabold text-primary', large ? 'text-3xl' : 'text-xl')}>
      <MapPin aria-hidden className={cn('shrink-0 text-eyebrow', large ? 'size-7' : 'size-5')} />
      {location.name}
    </h3>
    {location.place && <p className="mt-3 font-semibold">{location.place}</p>}
    {location.address && (
      <p className="mt-1 whitespace-pre-line text-muted-foreground">{location.address}</p>
    )}
    {location.reference && (
      <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{location.reference}</p>
    )}
    {location.phone && (
      <a
        className="mt-3 inline-flex items-center gap-2 font-medium text-primary hover:underline"
        href={`tel:${location.phone.replace(/[^\d+]/g, '')}`}
      >
        <Phone aria-hidden className="size-4" />
        {location.phone}
      </a>
    )}
    <MapLinks location={location} />
  </>
)

export const LocationsBlockComponent: React.FC<LocationsBlockProps> = async ({
  background,
  divider,
  eyebrow,
  heading,
  intro,
}) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: locations } = await payload.find({
    collection: 'locations',
    depth: 1,
    limit: 20,
    pagination: false,
    sort: 'order',
  })

  if (!locations.length) return null

  // La primera sede con foto se muestra destacada; el resto, en tarjetas
  const featured = locations.find((l) => l.image && typeof l.image === 'object')
  const others = locations.filter((l) => l !== featured)

  return (
    <Section background={background} divider={divider}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={background === 'navy'} />

      {featured && typeof featured.image === 'object' && featured.image && (
        <article className="mb-6 grid overflow-hidden rounded-3xl bg-background text-foreground shadow-sm ring-1 ring-border md:grid-cols-[1.3fr_1fr]">
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[22rem]">
            <Media fill imgClassName="object-cover" resource={featured.image} size="(min-width: 768px) 60vw, 100vw" />
          </div>
          <div className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-eyebrow">Sede principal</p>
            <div className="mt-3">
              <LocationDetails large location={featured} />
            </div>
          </div>
        </article>
      )}

      <ul className={cn('grid gap-5', others.length >= 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2')}>
        {others.map((location) => (
          <li
            className="rounded-3xl bg-background p-7 text-foreground shadow-sm ring-1 ring-border"
            key={location.id}
          >
            <LocationDetails location={location} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
