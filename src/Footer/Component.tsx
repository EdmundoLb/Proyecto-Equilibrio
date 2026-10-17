import configPromise from '@payload-config'
import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import { getPayload } from 'payload'
import React from 'react'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { getCachedGlobal } from '@/utilities/getGlobals'
import { getServerSideURL } from '@/utilities/getURL'

export async function Footer() {
  const payload = await getPayload({ config: configPromise })
  const [footerData, settings, { docs: locations }] = await Promise.all([
    getCachedGlobal('footer', 1)(),
    getCachedGlobal('site-settings', 0)(),
    payload.find({ collection: 'locations', depth: 0, limit: 20, pagination: false, sort: 'order' }),
  ])

  const navItems = footerData?.navItems || []
  const phones = settings?.phones || []
  const emails = settings?.emails || []
  const socials = [
    { label: 'Facebook', url: settings?.facebook },
    { label: 'Instagram', url: settings?.instagram },
  ].filter((s): s is { label: string; url: string } => Boolean(s.url))

  // Datos estructurados: Google entiende que es una clínica, con sus sedes, teléfonos y redes
  const siteUrl = getServerSideURL()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Proyecto Equilibrio',
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    description: settings?.footerAbout || undefined,
    email: emails[0]?.email,
    telephone: phones[0]?.number,
    sameAs: socials.map((s) => s.url),
    location: locations.map((location) => ({
      '@type': 'MedicalClinic',
      name: `Proyecto Equilibrio · ${location.name}`,
      telephone: location.phone || phones[0]?.number,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CR',
        addressLocality: location.name,
        streetAddress: location.address || location.place || undefined,
      },
      hasMap: location.mapUrl || undefined,
    })),
  }

  return (
    <footer className="mt-auto bg-deep text-deep-foreground">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link className="inline-block" href="/">
            <Logo tone="dark" />
          </Link>
          {settings?.footerAbout && (
            <p className="mt-4 text-sm leading-relaxed text-white/80">{settings.footerAbout}</p>
          )}
          {settings?.tagline && (
            <p className="mt-4 font-heading italic text-on-deep">“{settings.tagline}”</p>
          )}
        </div>

        {navItems.length > 0 && (
          <nav aria-label="Pie de página">
            <h2 className="text-sm font-bold uppercase tracking-wider text-on-deep">Navegación</h2>
            <ul className="mt-4 space-y-2">
              {navItems.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink className="text-white/85 hover:text-white hover:underline" {...link} />
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-on-deep">Contacto</h2>
          <ul className="mt-4 space-y-2 text-white/85">
            {phones.map(({ id, number }) => (
              <li key={id}>
                <a
                  className="inline-flex items-center gap-2 hover:text-white hover:underline"
                  href={`tel:${number.replace(/[^\d+]/g, '')}`}
                >
                  <Phone aria-hidden className="size-4 text-on-deep" />
                  {number}
                </a>
              </li>
            ))}
            {emails.map(({ id, email }) => (
              <li key={id}>
                <a
                  className="inline-flex items-center gap-2 break-all hover:text-white hover:underline"
                  href={`mailto:${email}`}
                >
                  <Mail aria-hidden className="size-4 shrink-0 text-on-deep" />
                  {email}
                </a>
              </li>
            ))}
            {settings?.hours && <li className="pt-1 text-sm">{settings.hours}</li>}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-on-deep">Sedes</h2>
          <ul className="mt-4 space-y-3 text-white/85">
            {locations.map((location) => (
              <li className="flex gap-2" key={location.id}>
                <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-on-deep" />
                <span>
                  <strong className="text-white">{location.name}</strong>
                  {location.place && <span className="block text-sm">{location.place}</span>}
                </span>
              </li>
            ))}
          </ul>
          {socials.length > 0 && (
            <ul className="mt-6 flex gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    className="text-sm font-semibold text-white underline-offset-4 hover:underline"
                    href={s.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {s.label}
                    <span className="sr-only"> (se abre en una pestaña nueva)</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="border-t border-white/15">
        {/* pb-24 en móvil: deja lugar al botón flotante de WhatsApp */}
        <div className="container flex flex-col gap-4 pb-24 pt-6 text-sm text-white/75 sm:pb-6 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Proyecto Equilibrio. Toda consulta es confidencial.
            <span className="mt-1 block text-white/70">
              Este sitio no reemplaza la atención de emergencia: si está en peligro, llame al{' '}
              <a className="font-semibold text-on-deep underline underline-offset-4" href="tel:911">
                911
              </a>
              .
            </span>
          </p>
          <Link
            className="font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
            href="/privacidad"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        type="application/ld+json"
      />
    </footer>
  )
}
