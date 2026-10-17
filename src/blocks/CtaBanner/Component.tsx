import { MessageCircle, Phone } from 'lucide-react'
import React from 'react'

import type { CtaBannerBlock as CtaBannerBlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import { WaveDivider } from '@/components/WaveDivider'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { whatsappHref } from '@/utilities/whatsapp'

export const CtaBannerBlock: React.FC<CtaBannerBlockProps> = async ({
  heading,
  links,
  showPhone,
  showWhatsapp,
  text,
}) => {
  const settings = await getCachedGlobal('site-settings', 0)()
  const phone = settings?.phones?.[0]?.number
  const wa = showWhatsapp ? whatsappHref(settings) : null

  return (
    <section className="relative bg-deep text-white" data-section="navy">
      <WaveDivider className="absolute inset-x-0 bottom-full h-12 md:h-20" fillClassName="fill-deep" />
      <div className="container relative py-20 text-center md:py-28">
        <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-balance md:text-5xl">
          {heading}
        </h2>
        {text && <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{text}</p>}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {(links || []).map(({ link }, i) => (
            <CMSLink key={i} {...link} size="lg" />
          ))}
          {wa && (
            <Button asChild size="lg" variant="outline">
              <a href={wa} rel="noopener noreferrer" target="_blank">
                <MessageCircle aria-hidden className="size-5" />
                Escríbanos por WhatsApp
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </Button>
          )}
        </div>
        {showPhone && phone && (
          <p className="mt-8 text-white/70">
            O llámenos al{' '}
            <a
              className="inline-flex items-center gap-1.5 font-bold text-on-deep underline-offset-4 hover:underline"
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
            >
              <Phone aria-hidden className="size-4" />
              {phone}
            </a>
            {settings?.hours && <span> · {settings.hours}</span>}
          </p>
        )}
      </div>
    </section>
  )
}
