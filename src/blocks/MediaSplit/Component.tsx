import { Check } from 'lucide-react'
import React from 'react'

import type { MediaSplitBlock as MediaSplitBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import { Eyebrow, Section } from '@/components/Section'
import { cn } from '@/utilities/ui'

export const MediaSplitBlock: React.FC<MediaSplitBlockProps> = ({
  background,
  bullets,
  divider,
  eyebrow,
  heading,
  image,
  imagePosition,
  links,
  text,
}) => {
  const onDark = background === 'navy'
  const imageRight = imagePosition === 'right'

  return (
    <Section background={background} divider={divider}>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div className={cn('relative', imageRight && 'lg:order-2')}>
          {/* Forma decorativa detrás de la foto */}
          <span
            aria-hidden
            className={cn(
              'absolute -bottom-5 size-2/3 rounded-3xl',
              imageRight ? '-left-5' : '-right-5',
              onDark ? 'bg-white/10' : 'bg-card',
            )}
          />
          {image && typeof image === 'object' && (
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
              <Media fill imgClassName="object-cover" resource={image} size="(min-width: 1024px) 50vw, 100vw" />
            </div>
          )}
        </div>

        <div>
          {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
          <h2
            className={cn(
              'mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-[2.75rem]',
              onDark ? 'text-white' : 'text-primary',
            )}
          >
            {heading}
          </h2>
          {text && (
            <p
              className={cn(
                'mt-5 whitespace-pre-line text-lg leading-relaxed',
                onDark ? 'text-white/80' : 'text-foreground/80',
              )}
            >
              {text}
            </p>
          )}
          {bullets && bullets.length > 0 && (
            <ul className="mt-7 space-y-3">
              {bullets.map((b, i) => (
                <li className="flex items-start gap-3" key={b.id || i}>
                  <span
                    aria-hidden
                    className={cn(
                      'mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full',
                      onDark ? 'bg-white/10 text-on-deep' : 'bg-secondary text-primary',
                    )}
                  >
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className={cn('font-medium', onDark ? 'text-white/90' : 'text-foreground/90')}>
                    {b.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
          {links && links.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-4">
              {links.map(({ link }, i) => (
                <CMSLink key={i} {...link} size="lg" />
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
