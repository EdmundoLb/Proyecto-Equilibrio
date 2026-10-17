import React from 'react'

import type { StepsBlock as StepsBlockProps } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/utilities/ui'

const ringByBackground = {
  white: 'ring-background',
  sand: 'ring-sand',
  light: 'ring-card',
  navy: 'ring-deep',
} as const

export const StepsBlock: React.FC<StepsBlockProps> = ({
  background,
  divider,
  eyebrow,
  heading,
  intro,
  items,
  note,
  variant,
}) => {
  const onDark = background === 'navy'
  const steps = items || []
  if (steps.length === 0) return null

  if (variant === 'timeline') {
    return (
      <Section background={background} divider={divider}>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading align="left" eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
            {note && (
              <p
                className={cn(
                  'rounded-2xl p-5 text-sm leading-relaxed',
                  onDark ? 'bg-white/5 text-white/80' : 'bg-card text-foreground/80',
                )}
              >
                {note}
              </p>
            )}
          </div>
          <ol className="relative">
            {steps.map((step, i) => (
              <li className="relative flex gap-6 pb-12 last:pb-0" key={step.id || i}>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className={cn(
                      'absolute left-7 top-16 bottom-2 w-px',
                      onDark ? 'bg-white/20' : 'bg-gradient-to-b from-sage to-border',
                    )}
                  />
                )}
                <span
                  aria-hidden
                  className={cn(
                    'relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl font-heading text-xl font-black',
                    onDark ? 'bg-on-deep text-deep' : 'bg-primary text-primary-foreground',
                  )}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="pt-2">
                  <p className={cn('text-xs font-bold uppercase tracking-[0.2em]', onDark ? 'text-on-deep' : 'text-eyebrow')}>
                    Etapa {i + 1}
                  </p>
                  <h3 className={cn('mt-1 text-2xl font-extrabold', onDark ? 'text-white' : 'text-primary')}>
                    {step.title}
                  </h3>
                  <p className={cn('mt-2 text-lg leading-relaxed', onDark ? 'text-white/80' : 'text-foreground/80')}>
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    )
  }

  return (
    <Section background={background} divider={divider}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
      <ol
        className={cn(
          'relative grid gap-6 md:grid-cols-2',
          steps.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3',
        )}
      >
        {/* Línea que conecta los pasos en escritorio: va de centro a centro del primer al último
            círculo, así que solo se dibuja cuando todos entran en una fila (hasta 4). Es un <li>
            oculto porque dentro de un <ol> solo puede haber <li>. */}
        {steps.length <= 4 && (
          <li
            aria-hidden
            className={cn(
              'pointer-events-none absolute top-8 hidden h-px lg:block',
              steps.length === 4 ? 'inset-x-[12.5%]' : 'inset-x-[16.67%]',
              onDark ? 'bg-white/20' : 'bg-border',
            )}
          />
        )}
        {steps.map((step, i) => (
          <li className="relative flex flex-col items-center text-center" key={step.id || i}>
            <span
              aria-hidden
              className={cn(
                'relative z-10 flex size-16 items-center justify-center rounded-full ring-8',
                onDark ? 'bg-on-deep text-deep' : 'bg-primary text-primary-foreground',
                // El anillo toma el color del fondo para "cortar" la línea que une los pasos
                ringByBackground[background || 'white'],
              )}
            >
              {step.icon ? (
                <Icon className="size-7" name={step.icon} />
              ) : (
                <span className="font-heading text-xl font-black">{i + 1}</span>
              )}
            </span>
            <p className={cn('mt-5 text-xs font-bold uppercase tracking-[0.2em]', onDark ? 'text-on-deep' : 'text-eyebrow')}>
              Paso {i + 1}
            </p>
            <h3 className={cn('mt-1 text-xl font-extrabold', onDark ? 'text-white' : 'text-primary')}>
              {step.title}
            </h3>
            <p className={cn('mt-2 max-w-xs leading-relaxed', onDark ? 'text-white/80' : 'text-foreground/80')}>
              {step.text}
            </p>
          </li>
        ))}
      </ol>
      {note && (
        <p className={cn('mx-auto mt-12 max-w-2xl text-center', onDark ? 'text-white/70' : 'text-muted-foreground')}>
          {note}
        </p>
      )}
    </Section>
  )
}
