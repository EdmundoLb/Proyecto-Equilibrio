import configPromise from '@payload-config'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import type { Service, ServicesGridBlock as ServicesGridBlockProps } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/utilities/ui'

type CardProps = { service: Service; onDark: boolean; featured?: boolean }

const ServiceCard: React.FC<CardProps> = ({ service, onDark, featured }) => (
  <Link
    className={cn(
      'group relative flex h-full flex-col rounded-3xl p-6 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring md:p-7',
      featured && 'md:p-9',
      onDark
        ? 'bg-white/5 ring-1 ring-white/15 hover:bg-white/10'
        : featured
          ? 'bg-deep text-white shadow-lg hover:-translate-y-0.5 hover:shadow-xl'
          : 'bg-background ring-1 ring-border hover:-translate-y-0.5 hover:shadow-md',
    )}
    href={`/servicios/${service.slug}`}
  >
    <div className="flex items-start justify-between gap-4">
      <span
        className={cn(
          'inline-flex shrink-0 items-center justify-center rounded-2xl',
          featured ? 'size-14' : 'size-11',
          onDark || featured ? 'bg-white/10 text-on-deep' : 'bg-secondary text-primary',
        )}
      >
        <Icon className={featured ? 'size-7' : 'size-5'} name={service.icon || 'heart'} />
      </span>
      <ArrowUpRight
        aria-hidden
        className={cn(
          'size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
          onDark || featured ? 'text-white/60' : 'text-muted-foreground',
        )}
      />
    </div>
    <h3
      className={cn(
        'mt-5 font-extrabold leading-snug',
        featured ? 'text-2xl md:text-3xl' : 'text-lg',
        onDark || featured ? 'text-white' : 'text-primary',
      )}
    >
      {service.title}
    </h3>
    <p
      className={cn(
        'mt-2',
        featured && 'text-lg',
        onDark || featured ? 'text-white/75' : 'text-muted-foreground',
      )}
    >
      {service.summary}
    </p>
  </Link>
)

export const ServicesGridBlock: React.FC<ServicesGridBlockProps> = async ({
  background,
  categories,
  divider,
  eyebrow,
  heading,
  intro,
  variant,
}) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: services } = await payload.find({
    collection: 'services',
    depth: 0,
    limit: 100,
    pagination: false,
    sort: 'order',
    ...(categories?.length ? { where: { category: { in: categories } } } : {}),
  })

  if (!services.length) return null

  const onDark = background === 'navy'
  const isBento = variant === 'bento' && services.length > 3
  const featured = isBento ? services.slice(0, 2) : []
  const rest = isBento ? services.slice(2) : services

  return (
    <Section background={background} divider={divider}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
      {featured.length > 0 && (
        <ul className="mb-5 grid gap-5 md:grid-cols-2">
          {featured.map((service) => (
            <li key={service.id}>
              <ServiceCard featured onDark={onDark} service={service} />
            </li>
          ))}
        </ul>
      )}
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((service) => (
          <li key={service.id}>
            <ServiceCard onDark={onDark} service={service} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
