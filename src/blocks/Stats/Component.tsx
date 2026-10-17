import React from 'react'

import type { StatsBlock as StatsBlockProps } from '@/payload-types'

import { Section } from '@/components/Section'
import { cn } from '@/utilities/ui'

export const StatsBlock: React.FC<StatsBlockProps> = ({ background, divider, items }) => {
  const bg = background || 'navy'
  const onDark = bg === 'navy'
  // Con 3 datos, una fila desde sm; si no, 2×2 y una fila desde lg. El divisor vertical aparece
  // solo cuando todos quedan en una fila.
  const threeItems = (items || []).length === 3

  return (
    <Section background={bg} containerClassName="py-12 md:py-16" divider={divider}>
      <dl className={cn('grid gap-y-10', threeItems ? 'sm:grid-cols-3' : 'grid-cols-2 lg:grid-cols-4')}>
        {(items || []).map((item, i) => (
          // dt (descripción) va primero en el DOM por semántica; flex-col-reverse muestra el valor arriba
          <div
            className={cn(
              'flex flex-col-reverse items-center px-4 text-center',
              threeItems ? 'sm:border-l sm:first:border-l-0' : 'lg:border-l lg:first:border-l-0',
              onDark ? 'border-white/15' : 'border-border',
            )}
            key={item.id || i}
          >
            <dt
              className={cn(
                'mt-2 max-w-[14rem] text-sm font-medium md:text-base',
                onDark ? 'text-white/80' : 'text-muted-foreground',
              )}
            >
              {item.label}
            </dt>
            <dd
              className={cn(
                'font-heading text-4xl font-black tracking-tight sm:text-5xl md:text-6xl',
                onDark ? 'text-highlight' : 'text-primary',
              )}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
