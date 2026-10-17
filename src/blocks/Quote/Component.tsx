import React from 'react'

import type { QuoteBlock as QuoteBlockProps } from '@/payload-types'

import { LogoMark } from '@/components/Logo/Logo'
import { Section } from '@/components/Section'
import { cn } from '@/utilities/ui'

export const QuoteBlock: React.FC<QuoteBlockProps> = ({ author, background, divider, quote }) => {
  const onDark = background === 'navy'

  return (
    <Section background={background} divider={divider}>
      <figure className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <LogoMark className="size-14 opacity-90" />
        <blockquote
          className={cn(
            'mt-8 font-heading text-3xl font-extrabold italic leading-tight text-balance md:text-5xl',
            onDark ? 'text-white' : 'text-primary',
          )}
        >
          <span aria-hidden className="text-highlight">“</span>
          {quote}
          <span aria-hidden className="text-highlight">”</span>
        </blockquote>
        {author && (
          <figcaption className={cn('mt-6 font-semibold', onDark ? 'text-on-deep' : 'text-eyebrow')}>
            {author}
          </figcaption>
        )}
      </figure>
    </Section>
  )
}
