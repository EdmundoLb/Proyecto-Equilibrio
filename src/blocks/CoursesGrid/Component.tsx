import configPromise from '@payload-config'
import { ArrowUpRight, Clock, GraduationCap, MessageCircle, MonitorSmartphone } from 'lucide-react'
import { getPayload } from 'payload'
import React from 'react'

import type { CoursesGridBlock as CoursesGridBlockProps } from '@/payload-types'

import { courseModalities } from '@/collections/Courses'
import { Media } from '@/components/Media'
import { Section, SectionHeading } from '@/components/Section'
import { Button } from '@/components/ui/button'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { cn } from '@/utilities/ui'
import { whatsappHref } from '@/utilities/whatsapp'

const modalityLabel = (value?: string | null) => courseModalities.find((m) => m.value === value)?.label

export const CoursesGridBlock: React.FC<CoursesGridBlockProps> = async ({
  background,
  divider,
  emptyText,
  eyebrow,
  heading,
  intro,
}) => {
  const payload = await getPayload({ config: configPromise })
  const [{ docs: courses }, settings] = await Promise.all([
    payload.find({
      collection: 'courses',
      depth: 1,
      limit: 100,
      pagination: false,
      sort: 'order',
      where: { active: { equals: true } },
    }),
    getCachedGlobal('site-settings', 0)(),
  ])

  const onDark = background === 'navy'

  return (
    <Section background={background} divider={divider}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />

      {courses.length === 0 ? (
        <div
          className={cn(
            'mx-auto flex max-w-2xl flex-col items-center rounded-3xl p-8 text-center md:p-12',
            onDark ? 'bg-white/5 ring-1 ring-white/15' : 'bg-card ring-1 ring-border',
          )}
        >
          <GraduationCap aria-hidden className={cn('size-12', onDark ? 'text-on-deep' : 'text-primary')} />
          {emptyText && (
            <p className={cn('mt-5 text-lg leading-relaxed', onDark ? 'text-white/85' : 'text-foreground/85')}>
              {emptyText}
            </p>
          )}
          {whatsappHref(settings) && (
            <Button asChild className="mt-8" size="lg" variant="accent">
              <a
                href={
                  whatsappHref(settings, 'Hola, deseo información sobre los cursos del Instituto Equilibrio.') ??
                  undefined
                }
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircle aria-hidden className="size-5" />
                Solicitar información
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </Button>
          )}
        </div>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const href =
              course.enrollUrl ||
              whatsappHref(settings, `Hola, deseo información sobre el curso: ${course.title}.`)
            const modality = modalityLabel(course.modality)

            return (
              <li key={course.id}>
                <article
                  className={cn(
                    'flex h-full flex-col overflow-hidden rounded-3xl',
                    onDark ? 'bg-white/5 ring-1 ring-white/15' : 'bg-background shadow-sm ring-1 ring-border',
                  )}
                >
                  {course.image && typeof course.image === 'object' && (
                    <Media
                      className="aspect-[16/9] overflow-hidden"
                      imgClassName="size-full object-cover"
                      resource={course.image}
                      size="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  )}
                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    {course.area && (
                      <p
                        className={cn(
                          'text-xs font-bold uppercase tracking-[0.2em]',
                          onDark ? 'text-on-deep' : 'text-eyebrow',
                        )}
                      >
                        {course.area}
                      </p>
                    )}
                    <h3
                      className={cn(
                        'mt-2 text-xl font-extrabold leading-snug',
                        onDark ? 'text-white' : 'text-primary',
                      )}
                    >
                      {course.title}
                    </h3>
                    <p className={cn('mt-3 leading-relaxed', onDark ? 'text-white/80' : 'text-foreground/80')}>
                      {course.summary}
                    </p>
                    {(modality || course.duration) && (
                      <ul
                        className={cn(
                          'mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm',
                          onDark ? 'text-white/75' : 'text-muted-foreground',
                        )}
                      >
                        {modality && (
                          <li className="inline-flex items-center gap-1.5">
                            <MonitorSmartphone aria-hidden className="size-4" />
                            {modality}
                          </li>
                        )}
                        {course.duration && (
                          <li className="inline-flex items-center gap-1.5">
                            <Clock aria-hidden className="size-4" />
                            {course.duration}
                          </li>
                        )}
                      </ul>
                    )}
                    {href && (
                      <a
                        className={cn(
                          'mt-auto inline-flex items-center gap-1.5 pt-6 font-bold underline-offset-4 hover:underline',
                          onDark ? 'text-on-deep' : 'text-eyebrow',
                        )}
                        href={href}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {course.enrollLabel || 'Más información'}
                        <span className="sr-only">
                          {' '}
                          sobre {course.title} (se abre en una pestaña nueva)
                        </span>
                        <ArrowUpRight aria-hidden className="size-4" />
                      </a>
                    )}
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      )}
    </Section>
  )
}
