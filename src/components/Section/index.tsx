import { cn } from '@/utilities/ui'
import React from 'react'

import { WaveDivider } from '@/components/WaveDivider'

export type SectionBackground = 'white' | 'sand' | 'light' | 'navy'

const backgrounds: Record<SectionBackground, string> = {
  white: 'bg-background',
  sand: 'bg-sand',
  light: 'bg-card',
  navy: 'bg-deep text-white',
}

// Color de la ola: el mismo fondo de la sección, para que la ola "entre" en ella
const waveFill: Record<SectionBackground, string> = {
  white: 'fill-background',
  sand: 'fill-sand',
  light: 'fill-card',
  navy: 'fill-deep',
}

export const Section: React.FC<{
  background?: SectionBackground | null
  children: React.ReactNode
  className?: string
  containerClassName?: string
  divider?: 'none' | 'wave' | null
  id?: string
}> = ({ background, children, className, containerClassName, divider, id }) => {
  const bg = background || 'white'

  return (
    <section
      className={cn('relative', backgrounds[bg], className)}
      data-section={bg}
      id={id}
    >
      {divider === 'wave' && (
        <WaveDivider
          className="absolute inset-x-0 bottom-full h-12 md:h-20"
          fillClassName={waveFill[bg]}
        />
      )}
      <div className={cn('container py-16 md:py-24', containerClassName)}>{children}</div>
    </section>
  )
}

export const Eyebrow: React.FC<{ children: React.ReactNode; onDark?: boolean; className?: string }> = ({
  children,
  onDark,
  className,
}) => (
  <p
    className={cn(
      'text-xs font-bold uppercase tracking-[0.2em] md:text-sm',
      onDark ? 'text-on-deep' : 'text-eyebrow',
      className,
    )}
  >
    {children}
  </p>
)

export const SectionHeading: React.FC<{
  eyebrow?: string | null
  heading?: string | null
  intro?: string | null
  align?: 'left' | 'center'
  onDark?: boolean
  className?: string
}> = ({ eyebrow, heading, intro, align = 'center', onDark, className }) => {
  if (!heading && !intro && !eyebrow) return null

  // Un párrafo centrado de más de 3–4 líneas se lee mal: los textos largos van alineados a la izquierda
  const longIntro = (intro?.length ?? 0) > 240

  return (
    <header
      className={cn('mb-12 max-w-3xl', align === 'center' && 'mx-auto text-center', className)}
    >
      {eyebrow && <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow>}
      {heading && (
        <h2
          className={cn(
            'mt-3 text-3xl font-extrabold leading-tight tracking-tight text-balance md:text-[2.75rem]',
            onDark ? 'text-white' : 'text-primary',
          )}
        >
          {heading}
        </h2>
      )}
      {intro && (
        <p
          className={cn(
            'mt-5 text-lg leading-relaxed text-pretty',
            longIntro && 'text-left',
            onDark ? 'text-white/80' : 'text-muted-foreground',
          )}
        >
          {intro}
        </p>
      )}
    </header>
  )
}
