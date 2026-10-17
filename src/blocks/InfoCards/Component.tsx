import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import type { InfoCardsBlock as InfoCardsBlockProps } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/utilities/ui'

export const InfoCardsBlock: React.FC<InfoCardsBlockProps> = ({
  background,
  cards,
  columns,
  divider,
  eyebrow,
  heading,
  intro,
}) => {
  const onDark = background === 'navy'

  return (
    <Section background={background} divider={divider}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
      <div className={cn('grid gap-6', columns === '3' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2')}>
        {(cards || []).map((card, i) => (
          <article
            className={cn(
              'flex flex-col rounded-3xl p-7 md:p-9',
              onDark ? 'bg-white/5 ring-1 ring-white/15' : 'bg-background shadow-sm ring-1 ring-border',
            )}
            key={card.id || i}
          >
            {card.icon && (
              <span
                className={cn(
                  'mb-5 inline-flex size-12 items-center justify-center rounded-2xl',
                  onDark ? 'bg-white/10 text-on-deep' : 'bg-secondary text-primary',
                )}
              >
                <Icon className="size-6" name={card.icon} />
              </span>
            )}
            <h3 className={cn('text-xl font-extrabold md:text-2xl', onDark ? 'text-white' : 'text-primary')}>
              {card.title}
            </h3>
            <p className={cn('mt-3 leading-relaxed', onDark ? 'text-white/80' : 'text-foreground/80')}>
              {card.text}
            </p>
            {card.linkUrl && card.linkLabel && (
              <Link
                className={cn(
                  'mt-auto inline-flex items-center gap-1.5 pt-6 font-bold underline-offset-4 hover:underline',
                  onDark ? 'text-on-deep' : 'text-eyebrow',
                )}
                href={card.linkUrl}
              >
                {card.linkLabel}
                <span className="sr-only">: {card.title}</span>
                <ArrowRight aria-hidden className="size-4" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </Section>
  )
}
