import { Plus } from 'lucide-react'
import React from 'react'

import type { FaqBlock as FaqBlockProps } from '@/payload-types'

import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/utilities/ui'

export const FaqBlock: React.FC<FaqBlockProps> = ({
  background,
  divider,
  eyebrow,
  heading,
  intro,
  items,
}) => {
  const onDark = background === 'navy'
  const questions = items || []
  if (questions.length === 0) return null

  // Datos estructurados para que Google pueda mostrar las preguntas en los resultados
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }

  return (
    <Section background={background} divider={divider}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <SectionHeading align="left" eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
        <div className={cn('divide-y border-y', onDark ? 'divide-white/15 border-white/15' : 'divide-border border-border')}>
          {questions.map((q, i) => (
            <details className="group" key={q.id || i}>
              <summary
                className={cn(
                  'flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-bold focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring [&::-webkit-details-marker]:hidden',
                  onDark ? 'text-white' : 'text-primary',
                )}
              >
                {q.question}
                <span
                  aria-hidden
                  className={cn(
                    'inline-flex size-9 shrink-0 items-center justify-center rounded-full transition-transform group-open:rotate-45',
                    onDark ? 'bg-white/10 text-on-deep' : 'bg-secondary text-primary',
                  )}
                >
                  <Plus className="size-5" />
                </span>
              </summary>
              <p
                className={cn(
                  'max-w-2xl whitespace-pre-line pb-6 pr-12 text-lg leading-relaxed',
                  onDark ? 'text-white/80' : 'text-foreground/80',
                )}
              >
                {q.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      {questions.length > 0 && (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
          type="application/ld+json"
        />
      )}
    </Section>
  )
}
