import { Check } from 'lucide-react'
import React from 'react'

import type { FeatureListBlock as FeatureListBlockProps } from '@/payload-types'

import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/utilities/ui'

export const FeatureListBlock: React.FC<FeatureListBlockProps> = ({
  background,
  columns,
  divider,
  eyebrow,
  heading,
  intro,
  items,
}) => {
  const onDark = background === 'navy'

  return (
    <Section background={background} divider={divider}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
      <ul className={cn('mx-auto grid max-w-5xl gap-x-12 gap-y-5', columns === '2' && 'md:grid-cols-2')}>
        {(items || []).map((item, i) => (
          <li className="flex gap-4 text-lg leading-relaxed" key={item.id || i}>
            <span
              aria-hidden
              className={cn(
                'mt-1 inline-flex size-6 shrink-0 items-center justify-center rounded-full',
                onDark ? 'bg-white/10 text-on-deep' : 'bg-secondary text-primary',
              )}
            >
              <Check className="size-3.5" strokeWidth={3} />
            </span>
            <p className={onDark ? 'text-white/85' : 'text-foreground/85'}>
              {item.title && (
                <strong className={onDark ? 'text-white' : 'text-primary'}>{item.title}: </strong>
              )}
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
