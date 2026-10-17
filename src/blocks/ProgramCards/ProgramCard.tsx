'use client'

import { ChevronDown, MessageCircle, Plus } from 'lucide-react'
import React, { useId, useState } from 'react'

import type { ProgramCardsBlock } from '@/payload-types'

import { Icon } from '@/components/Icon'
import { Button } from '@/components/ui/button'
import { cn } from '@/utilities/ui'

type Item = NonNullable<ProgramCardsBlock['items']>[number]

const Detail: React.FC<{ label: string; text?: string | null; onDark: boolean }> = ({
  label,
  text,
  onDark,
}) =>
  text ? (
    <p className={cn('leading-relaxed', onDark ? 'text-white/80' : 'text-foreground/80')}>
      <strong className={onDark ? 'text-white' : 'text-primary'}>{label}: </strong>
      {text}
    </p>
  ) : null

// Tarjeta en escritorio; en móvil el detalle se pliega como acordeón y el botón de WhatsApp queda visible
export const ProgramCard: React.FC<{ item: Item; href: string | null; onDark: boolean }> = ({
  item,
  href,
  onDark,
}) => {
  const [open, setOpen] = useState(false)
  const bodyId = useId()
  const programs = item.programs || []

  return (
    <article
      className={cn(
        'flex flex-col rounded-3xl p-6 md:p-8',
        onDark ? 'bg-white/5 ring-1 ring-white/15' : 'bg-background shadow-sm ring-1 ring-border',
      )}
    >
      <div className="flex items-start gap-4">
        {item.icon && (
          <span
            className={cn(
              'inline-flex size-12 shrink-0 items-center justify-center rounded-2xl',
              onDark ? 'bg-white/10 text-on-deep' : 'bg-secondary text-primary',
            )}
          >
            <Icon className="size-6" name={item.icon} />
          </span>
        )}
        <div>
          {item.label && (
            <p
              className={cn(
                'text-xs font-bold uppercase tracking-[0.2em]',
                onDark ? 'text-on-deep' : 'text-eyebrow',
              )}
            >
              {item.label}
            </p>
          )}
          <h3
            className={cn(
              'mt-1 text-xl font-extrabold leading-snug md:text-2xl',
              onDark ? 'text-white' : 'text-primary',
            )}
          >
            {item.title}
          </h3>
        </div>
      </div>
      {item.subtitle && (
        <p className={cn('mt-4 text-lg leading-relaxed', onDark ? 'text-white/85' : 'text-foreground/85')}>
          {item.subtitle}
        </p>
      )}

      <button
        aria-controls={bodyId}
        aria-expanded={open}
        className={cn(
          'mt-4 inline-flex min-h-11 items-center gap-2 self-start rounded-xl font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring md:hidden',
          onDark ? 'text-on-deep' : 'text-eyebrow',
        )}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        {open ? 'Ocultar detalles' : 'Ver detalles'}
        <ChevronDown aria-hidden className={cn('size-5 transition-transform', open && 'rotate-180')} />
      </button>

      <div className={cn('mt-5 space-y-4', open ? 'block' : 'hidden', 'md:block')} id={bodyId}>
        <Detail label="Descripción" onDark={onDark} text={item.description} />
        <Detail label="Estrategias" onDark={onDark} text={item.strategies} />
        <Detail label="Modalidad" onDark={onDark} text={item.modality} />

        {programs.length > 0 && (
          <details
            className={cn(
              'group rounded-2xl',
              onDark ? 'bg-white/5 ring-1 ring-white/10' : 'bg-card/60 ring-1 ring-border',
            )}
          >
            <summary
              className={cn(
                'flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring [&::-webkit-details-marker]:hidden',
                onDark ? 'text-white' : 'text-primary',
              )}
            >
              {programs.length === 1 ? 'Ver el programa' : 'Ver los ' + programs.length + ' programas'}
              <Plus aria-hidden className="size-5 shrink-0 transition-transform group-open:rotate-45" />
            </summary>
            <ol className="space-y-5 px-5 pb-5">
              {programs.map((program, i) => (
                <li key={program.id || i}>
                  <h4 className={cn('font-bold', onDark ? 'text-white' : 'text-primary')}>
                    {i + 1}. {program.title}
                  </h4>
                  {program.description && (
                    <p className={cn('mt-1 text-sm leading-relaxed', onDark ? 'text-white/75' : 'text-foreground/75')}>
                      {program.description}
                    </p>
                  )}
                  {program.strategies && (
                    <p className={cn('mt-1 text-sm leading-relaxed', onDark ? 'text-white/75' : 'text-foreground/75')}>
                      <strong>Estrategias:</strong> {program.strategies}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </details>
        )}

        {item.note && (
          <p className={cn('text-sm italic', onDark ? 'text-white/70' : 'text-muted-foreground')}>{item.note}</p>
        )}
      </div>

      {href && (
        <Button asChild className="mt-6 h-auto min-h-11 self-start whitespace-normal py-2 text-center" variant="outline">
          <a href={href} rel="noopener noreferrer" target="_blank">
            <MessageCircle aria-hidden className="size-5 shrink-0" />
            {item.ctaLabel}
            <span className="sr-only"> (se abre en una pestaña nueva)</span>
          </a>
        </Button>
      )}
    </article>
  )
}
