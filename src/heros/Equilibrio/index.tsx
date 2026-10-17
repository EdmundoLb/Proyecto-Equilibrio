import { Phone } from 'lucide-react'
import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { TraumaSeal } from '@/components/TraumaSeal'
import { WaveDivider } from '@/components/WaveDivider'
import { getCachedGlobal } from '@/utilities/getGlobals'

export const EquilibrioHero: React.FC<Page['hero']> = async ({
  equilibrioMedia: media,
  links,
  richText,
  showSeal,
}) => {
  const settings = await getCachedGlobal('site-settings', 0)()
  const phone = settings?.phones?.[0]?.number
  const hasImage = media && typeof media === 'object'

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-card via-card to-sand">
      {/* Olas suaves de fondo */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-full w-[60rem] text-sage opacity-[0.15]"
        fill="none"
        viewBox="0 0 600 600"
      >
        <path d="M0 220c100-80 200-80 300 0s200 80 300 0" stroke="currentColor" strokeWidth="40" />
        <path d="M0 320c100-80 200-80 300 0s200 80 300 0" stroke="currentColor" strokeWidth="40" />
        <path d="M0 420c100-80 200-80 300 0s200 80 300 0" stroke="currentColor" strokeWidth="40" />
      </svg>

      <div className="container relative z-10 grid items-center gap-12 pb-24 pt-12 md:pb-32 md:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div>
          {richText && (
            <RichText
              className="mx-0 max-w-none [&_h1]:mb-5 [&_h1]:text-4xl [&_h1]:leading-[1.08] [&_h1]:tracking-tight md:[&_h1]:text-6xl [&_p]:text-lg [&_p]:leading-relaxed [&_p]:text-foreground/80 md:[&_p]:text-xl"
              data={richText}
              enableGutter={false}
            />
          )}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-4">
              {links.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} size="lg" />
                </li>
              ))}
            </ul>
          )}
          {phone && (
            <p className="mt-6 text-foreground/70">
              ¿Prefiere hablar ahora?{' '}
              <a
                className="inline-flex items-center gap-1.5 font-bold text-primary underline-offset-4 hover:underline"
                href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              >
                <Phone aria-hidden className="size-4" />
                {phone}
              </a>
            </p>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          {hasImage ? (
            <>
              <span aria-hidden className="absolute -right-4 -top-4 size-3/4 rounded-[3rem] bg-sage/25" />
              <div className="relative aspect-[5/4] overflow-hidden rounded-[3rem] rounded-bl-[6rem] shadow-2xl">
                <Media fill imgClassName="object-cover" priority resource={media} size="(min-width: 1024px) 45vw, 100vw" />
              </div>
              {showSeal && (
                <TraumaSeal className="absolute -bottom-10 -left-4 size-32 md:-left-10 md:size-40" />
              )}
            </>
          ) : (
            showSeal && <TraumaSeal className="mx-auto size-40 md:size-72" />
          )}
        </div>
      </div>

      <WaveDivider className="absolute inset-x-0 bottom-0 h-16 md:h-24" />
    </div>
  )
}
