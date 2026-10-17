import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'

import type { TeamGridBlock as TeamGridBlockProps } from '@/payload-types'

import { Media } from '@/components/Media'
import { Section, SectionHeading } from '@/components/Section'
import { cn } from '@/utilities/ui'

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()

export const TeamGridBlock: React.FC<TeamGridBlockProps> = async ({
  background,
  divider,
  eyebrow,
  heading,
  intro,
}) => {
  const payload = await getPayload({ config: configPromise })
  const { docs: members } = await payload.find({
    collection: 'team',
    depth: 1,
    limit: 50,
    pagination: false,
    sort: 'order',
  })

  if (!members.length) return null

  const onDark = background === 'navy'

  return (
    <Section background={background} divider={divider}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
      <ul
        className={cn(
          'mx-auto grid gap-8 sm:grid-cols-2',
          members.length > 2 ? 'max-w-6xl lg:grid-cols-3' : 'max-w-4xl',
        )}
      >
        {members.map((member) => (
          <li
            className="flex flex-col overflow-hidden rounded-3xl bg-background text-foreground shadow-sm ring-1 ring-border"
            key={member.id}
          >
            <div className="relative aspect-[4/3] bg-gradient-to-br from-deep via-primary to-sage">
              {member.photo && typeof member.photo === 'object' ? (
                <Media fill imgClassName="object-cover" resource={member.photo} size="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
              ) : (
                <span
                  aria-hidden
                  className="flex size-full items-center justify-center font-heading text-6xl font-extrabold text-white/90"
                >
                  {initials(member.name)}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-7">
              <h3 className="text-2xl font-extrabold text-primary">{member.name}</h3>
              <p className="mt-1 font-semibold text-eyebrow">
                {member.role}
                {member.credentials && <span className="text-muted-foreground"> · {member.credentials}</span>}
              </p>
              {member.quote && (
                <blockquote className="mt-4 border-l-2 border-highlight pl-4 font-heading italic text-foreground/85">
                  “{member.quote}”
                </blockquote>
              )}
              {member.bio && <p className="mt-4 leading-relaxed text-foreground/80">{member.bio}</p>}
              {member.focus && (
                <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                  {member.focus.split('·').map((tag) => (
                    <li
                      className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary"
                      key={tag}
                    >
                      {tag.trim()}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
