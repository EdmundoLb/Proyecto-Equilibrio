import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

// Imagen a pantalla completa con texto encima. El fondo bg-deep y el degradado garantizan
// contraste del texto aunque la imagen sea clara o todavía no haya cargado.
export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-deep text-white" data-section="navy">
      {media && typeof media === 'object' && (
        <>
          <Media fill imgClassName="-z-20 object-cover" priority resource={media} size="100vw" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-deep/90 via-deep/70 to-deep/30" />
        </>
      )}
      <div className="container py-20">
        <div className="max-w-[36.5rem]">
          {richText && <RichText className="mb-8" data={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex flex-wrap gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} size="lg" />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
