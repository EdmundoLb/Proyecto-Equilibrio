import React from 'react'

import type { ProgramCardsBlock as ProgramCardsBlockProps } from '@/payload-types'

import { Section, SectionHeading } from '@/components/Section'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { whatsappHref } from '@/utilities/whatsapp'

import { ProgramCard } from './ProgramCard'

export const ProgramCardsBlock: React.FC<ProgramCardsBlockProps> = async ({
  anchorId,
  background,
  divider,
  eyebrow,
  heading,
  intro,
  items,
}) => {
  const settings = await getCachedGlobal('site-settings', 0)()
  const onDark = background === 'navy'

  return (
    <Section background={background} className="scroll-mt-24" divider={divider} id={anchorId || undefined}>
      <SectionHeading eyebrow={eyebrow} heading={heading} intro={intro} onDark={onDark} />
      <ul className="grid items-start gap-6 md:grid-cols-2">
        {(items || []).map((item, i) => (
          <li key={item.id || i}>
            <ProgramCard
              href={whatsappHref(settings, item.whatsappMessage)}
              item={item}
              onDark={onDark}
            />
          </li>
        ))}
      </ul>
    </Section>
  )
}
