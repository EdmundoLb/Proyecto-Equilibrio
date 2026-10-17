import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

type LowImpactHeroType =
  | {
      children?: React.ReactNode
      links?: never
      richText?: never
    }
  | (Omit<Page['hero'], 'richText'> & {
      children?: never
      richText?: Page['hero']['richText']
    })

export const LowImpactHero: React.FC<LowImpactHeroType> = ({ children, links, richText }) => {
  return (
    <div className="bg-card">
      <div className="container py-14 md:py-20">
        <div className="max-w-[48rem] [&_h1]:mb-4 [&_h1]:text-4xl md:[&_h1]:text-5xl [&_p]:text-lg [&_p]:text-foreground/80">
          {children || (richText && <RichText data={richText} enableGutter={false} />)}
        </div>
        {Array.isArray(links) && links.length > 0 && (
          <ul className="mt-8 flex flex-wrap gap-4">
            {links.map(({ link }, i) => (
              <li key={i}>
                <CMSLink {...link} size="lg" />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
