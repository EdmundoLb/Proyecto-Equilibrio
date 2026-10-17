import type { CollectionSlug, Payload, PayloadRequest } from 'payload'

import path from 'path'
import { fileURLToPath } from 'url'

import type { Media } from '@/payload-types'

import { contactForm as contactFormData } from './contact-form'
import { locations, services, settings, team } from './content'
import {
  aboutPage,
  addictionsPage,
  behavioralPage,
  contactPage,
  faqPage,
  familyPage,
  homePage,
  institutePage,
  institutionsPage,
  pillarsPage,
  privacyPage,
  programPage,
  servicesPage,
  teamPage,
} from './pages'
import { paragraph, richText } from './richtext'

const dirname = path.dirname(fileURLToPath(import.meta.url))

const collections: CollectionSlug[] = [
  'categories',
  'pages',
  'posts',
  'services',
  'team',
  'locations',
  'forms',
  'form-submissions',
  'search',
]

const categories = ['Recuperación', 'Familias', 'Salud mental', 'Prevención']

const slugify = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Sube una imagen de src/endpoints/seed/images, o reutiliza la existente si ya se subió antes
const upsertImage = async (
  payload: Payload,
  req: PayloadRequest,
  filename: string,
  alt: string,
): Promise<Media> => {
  const existing = await payload.find({
    collection: 'media',
    limit: 1,
    where: { filename: { equals: filename } },
    req,
  })
  if (existing.docs[0]) return existing.docs[0]

  return payload.create({
    collection: 'media',
    data: { alt },
    filePath: path.resolve(dirname, 'images', filename),
    req,
  })
}

// Carga el contenido inicial de Proyecto Equilibrio. Borra y vuelve a crear el contenido de las
// colecciones de arriba (no toca usuarios; las imágenes se reutilizan si ya existen).
export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {
  payload.logger.info('Seeding database...')
  const context = { disableRevalidate: true }

  payload.logger.info('— Clearing collections...')
  await Promise.all(
    collections.map((collection) => payload.db.deleteMany({ collection, req, where: {} })),
  )
  await Promise.all(
    collections
      .filter((collection) => Boolean(payload.collections[collection].config.versions))
      .map((collection) => payload.db.deleteVersions({ collection, req, where: {} })),
  )

  payload.logger.info('— Seeding images...')
  // En serie: las subidas generan varios tamaños con sharp y comparten la transacción de `req`
  const hero = await upsertImage(payload, req, 'hero-camino.jpg', 'Dos personas caminan juntas por un sendero al atardecer')
  const conversation = await upsertImage(payload, req, 'conversacion.jpg', 'Una profesional conversa con una persona en una sesión')
  const family = await upsertImage(payload, req, 'familia.jpg', 'Un grupo de personas abrazadas mira el atardecer')
  const sede = await upsertImage(payload, req, 'sede-san-jose.jpg', 'Edificio de la Clínica Burstin, sede de Proyecto Equilibrio en San José')
  const images = { hero, conversation, family }

  payload.logger.info('— Seeding settings, team, locations and categories...')
  await payload.updateGlobal({ slug: 'site-settings', data: settings, context, req })

  await Promise.all([
    ...team.map((data) => payload.create({ collection: 'team', data, context, req })),
    ...locations.map((data, i) =>
      payload.create({
        collection: 'locations',
        data: { ...data, ...(i === 0 ? { image: sede.id } : {}) },
        context,
        req,
      }),
    ),
    ...categories.map((title) =>
      payload.create({
        collection: 'categories',
        data: { title, slug: slugify(title) },
        context,
        req,
      }),
    ),
  ])

  payload.logger.info('— Seeding services...')
  // En orden, para que `order` respete la secuencia del documento de contenido
  for (const [i, { body, ...service }] of services.entries()) {
    await payload.create({
      collection: 'services',
      data: {
        ...service,
        order: i + 1,
        content: body ? richText(paragraph(body)) : undefined,
        meta: { title: service.title, description: service.summary },
      },
      context,
      req,
    })
  }

  payload.logger.info('— Seeding contact form and pages...')
  const form = await payload.create({
    collection: 'forms',
    depth: 0,
    data: contactFormData,
    req,
  })

  const pages = [
    homePage(images),
    programPage(images),
    addictionsPage(),
    behavioralPage(),
    familyPage(images),
    servicesPage(),
    teamPage(images),
    faqPage(),
    contactPage({ form }),
    aboutPage(images),
    pillarsPage(),
    institutionsPage(),
    institutePage(),
    privacyPage(),
  ]
  const created = await Promise.all(
    pages.map((data) => payload.create({ collection: 'pages', depth: 0, data, context, req })),
  )
  const bySlug = Object.fromEntries(created.map((p) => [p.slug, p.id]))

  const pageLink = (label: string, slug: string) => ({
    link: {
      type: 'reference' as const,
      label,
      reference: { relationTo: 'pages' as const, value: bySlug[slug] },
    },
  })

  payload.logger.info('— Seeding header and footer...')
  await Promise.all([
    payload.updateGlobal({
      slug: 'header',
      data: {
        cta: {
          type: 'reference',
          label: 'Solicitar orientación',
          reference: { relationTo: 'pages', value: bySlug.contacto },
        },
        navItems: [
          // Etiquetas cortas y orientadas a quien busca ayuda. "Contacto" ya lo cubre el botón CTA;
          // Instituto y Recursos quedan en el pie hasta que tengan contenido.
          pageLink('Nosotros', 'quienes-somos'),
          pageLink('El programa', 'programa'),
          pageLink('Servicios', 'programas-ambulatorios'),
          pageLink('Familias', 'familia'),
          pageLink('Empresas y colegios', 'programas-empresas-colegios'),
        ],
      },
      context,
      req,
    }),
    payload.updateGlobal({
      slug: 'footer',
      data: {
        navItems: [
          pageLink('El programa ambulatorio', 'programa'),
          pageLink('Servicios especializados', 'programas-ambulatorios'),
          pageLink('Adicciones', 'adicciones'),
          pageLink('Adicciones conductuales', 'adicciones-conductuales'),
          pageLink('Apoyo a familias', 'familia'),
          pageLink('Otros servicios', 'servicios'),
          pageLink('Empresas y colegios', 'programas-empresas-colegios'),
          pageLink('Quiénes somos', 'quienes-somos'),
          pageLink('Nuestro equipo', 'equipo'),
          pageLink('Instituto Equilibrio', 'instituto-equilibrio'),
          { link: { type: 'custom' as const, label: 'Recursos', url: '/posts' } },
          pageLink('Preguntas frecuentes', 'preguntas-frecuentes'),
          pageLink('Contacto', 'contacto'),
        ],
      },
      context,
      req,
    }),
  ])

  payload.logger.info('Seeded database successfully!')
}
