import type { RequiredDataFromCollectionSlug } from 'payload'

import type { Form, Media } from '@/payload-types'

import {
  behavioralAddictions,
  duration,
  familyIntro,
  familySafeSpace,
  faqs,
  outpatientFormat,
  outpatientIntro,
  programComponents,
  purpose,
  whoWeAre,
  whoWeAreMore,
} from './content'
import {
  companyPrograms,
  institutionsIntro,
  pillars,
  pillarsFaqs,
  pillarsIntro,
  schoolPrograms,
} from './programs'
import { heading, paragraph, richText } from './richtext'

type PageData = RequiredDataFromCollectionSlug<'pages'>
type Block = PageData['layout'][number]
export type SeedImages = { hero: Media; conversation: Media; family: Media }

const pageHero = (title: string, intro: string): PageData['hero'] => ({
  type: 'lowImpact',
  richText: richText(heading('h1', title), paragraph(intro)),
})

const link = <A extends 'accent' | 'outline' | 'default' = 'accent'>(
  label: string,
  url: string,
  appearance: A = 'accent' as A,
) => ({
  link: { type: 'custom' as const, appearance, label, url },
})

const closingCta = (title: string, text: string, label = 'Solicitar orientación'): Block => ({
  blockType: 'ctaBanner',
  heading: title,
  text,
  links: [{ link: { type: 'custom', appearance: 'accent', label, url: '/contacto' } }],
  showWhatsapp: true,
  showPhone: true,
})

export const homePage = (img?: SeedImages): PageData => ({
  title: 'Inicio',
  slug: 'home',
  _status: 'published',
  hero: {
    type: 'equilibrio',
    showSeal: true,
    equilibrioMedia: img?.hero,
    richText: richText(
      heading('h1', 'Recuperar el equilibrio es posible'),
      paragraph(
        'Un espacio seguro, profesional y humano para iniciar y sostener un proceso de recuperación.',
      ),
    ),
    links: [
      link('Solicitar orientación', '/contacto'),
      link('Conocer el programa', '/programa', 'outline'),
    ],
  },
  layout: [
    {
      blockType: 'stats',
      background: 'navy',
      items: [
        { value: '25+', label: 'años de experiencia del equipo' },
        { value: '90', label: 'días de etapa inicial intensiva' },
        { value: '1 año', label: 'de acompañamiento y soporte' },
        { value: '24/7', label: 'atención telefónica' },
      ],
    },
    // Los bloques con foto solo se incluyen cuando hay imágenes (el Inicio de respaldo no las tiene)
    ...(img
      ? [
          {
            blockType: 'mediaSplit',
            image: img.conversation,
            imagePosition: 'left',
            eyebrow: '¿Quiénes somos?',
            heading: 'Ciencia, experiencia, empatía y acompañamiento',
            text: `${whoWeAre}\n\n${purpose}`,
            bullets: [
              { text: 'Tratamiento individualizado, intensivo y flexible' },
              { text: 'Prácticas basadas en evidencia científica' },
              { text: 'Programa receptivo al trauma' },
              { text: 'Sin necesidad de internamiento' },
            ],
            links: [link('Conocer al equipo', '/equipo', 'outline')],
            background: 'white',
          } satisfies Block,
        ]
      : []),
    {
      blockType: 'infoCards',
      eyebrow: '¿En qué podemos ayudarle?',
      heading: 'Atención para cada situación',
      columns: '3',
      background: 'sand',
      divider: 'wave',
      cards: [
        {
          icon: 'route',
          title: 'Programa ambulatorio',
          text: 'Tratamiento para problemas relacionados con el consumo de sustancias, sin desconectarse necesariamente de la vida cotidiana.',
          linkLabel: 'Conocer el programa',
          linkUrl: '/programa',
        },
        {
          icon: 'smartphone',
          title: 'Adicciones conductuales',
          text: 'Dispositivos digitales, juegos de azar y apuestas en línea, compras compulsivas y otras conductas.',
          linkLabel: 'Ver más',
          linkUrl: '/adicciones-conductuales',
        },
        {
          icon: 'family',
          title: 'Apoyo para familias',
          text: 'La recuperación también puede involucrar a quienes acompañan.',
          linkLabel: 'Orientación para familias',
          linkUrl: '/familia',
        },
      ],
    },
    {
      blockType: 'steps',
      variant: 'steps',
      eyebrow: 'Cómo empezar',
      heading: 'El primer paso puede ser conversar',
      background: 'white',
      items: [
        {
          icon: 'phone',
          title: 'Primer contacto',
          text: 'Llámenos o escríbanos. Toda consulta es confidencial.',
        },
        {
          icon: 'clipboard',
          title: 'Valoración profesional',
          text: 'Determinamos la modalidad de atención adecuada para cada persona.',
        },
        {
          icon: 'compass',
          title: 'Plan a su medida',
          text: 'Sesiones individuales, psicoeducativas y grupales, en modalidad progresiva o prescriptiva.',
        },
        {
          icon: 'sprout',
          title: 'Acompañamiento',
          text: 'Seguimiento y soporte durante el primer año de recuperación.',
        },
      ],
    },
    ...(img
      ? [
          {
            blockType: 'mediaSplit',
            image: img.family,
            imagePosition: 'right',
            eyebrow: 'Familias',
            heading: 'La recuperación también puede involucrar a quienes acompañan',
            text: familyIntro,
            links: [link('Quiero orientación para mi familia', '/familia')],
            background: 'light',
          } satisfies Block,
        ]
      : []),
    {
      blockType: 'quote',
      quote: 'Acompañamos tu camino hacia el bienestar',
      background: 'white',
    },
    closingCta(
      'El primer paso puede ser conversar',
      'Si usted o una persona cercana está enfrentando dificultades relacionadas con una adicción, comuníquese con nuestro equipo.',
    ),
  ],
  meta: {
    title: 'Tratamiento ambulatorio de adicciones en Costa Rica',
    description:
      'Tratamiento ambulatorio individualizado, intensivo y flexible para problemas relacionados con el consumo de sustancias y otras conductas adictivas.',
  },
})

export const programPage = (img: SeedImages): PageData => ({
  title: 'Programa ambulatorio',
  slug: 'programa',
  _status: 'published',
  hero: pageHero(
    'Programa de Tratamiento Ambulatorio',
    'Recuperación sin desconectarse necesariamente de la vida cotidiana.',
  ),
  layout: [
    {
      blockType: 'mediaSplit',
      image: img.hero,
      imagePosition: 'right',
      eyebrow: '¿A quién va dirigido?',
      heading: 'Un programa adaptado a cada persona',
      text: `${outpatientIntro}\n\n${outpatientFormat}`,
      background: 'white',
    },
    {
      blockType: 'stats',
      background: 'sand',
      items: [
        { value: '90', label: 'días de etapa inicial intensiva, como mínimo' },
        { value: '1 año', label: 'de acompañamiento y soporte' },
        { value: '60', label: 'segmentos de video educativos' },
      ],
    },
    {
      blockType: 'steps',
      variant: 'timeline',
      eyebrow: 'Componentes del programa',
      heading: 'Cuatro áreas relacionadas entre sí',
      intro:
        'Cada persona avanza por las etapas según sus necesidades, con el acompañamiento del equipo.',
      note: duration,
      background: 'white',
      items: programComponents.map(({ title, body, icon }) => ({ title, text: body || '', icon })),
    },
    {
      blockType: 'infoCards',
      eyebrow: '¿Cómo trabajamos?',
      heading: 'Herramientas educativas e interactivas',
      intro: 'Orientadas a involucrar activamente a cada participante en su recuperación.',
      columns: '3',
      background: 'light',
      cards: [
        {
          icon: 'route',
          title: 'Modalidad progresiva',
          text: 'Comenzamos con temas fundamentales y avanzamos gradualmente hacia contenidos más complejos conforme la persona aprende y progresa en su proceso.',
        },
        {
          icon: 'compass',
          title: 'Modalidad prescriptiva',
          text: 'Permite seleccionar y trabajar contenidos de acuerdo con los desafíos inmediatos que enfrenta cada participante en su vida cotidiana.',
        },
        {
          icon: 'book',
          title: 'Recursos educativos',
          text: '60 segmentos de video educativos para complementar las sesiones, además de recursos de audio de meditación y respiración guiada.',
        },
      ],
    },
    closingCta(
      '¿Desea saber si el programa es adecuado para usted?',
      'Lo apropiado es comenzar con una valoración profesional.',
      'Consultar sobre el programa',
    ),
  ],
  meta: {
    title: 'Programa de tratamiento ambulatorio',
    description: outpatientIntro,
  },
})

export const addictionsPage = (): PageData => ({
  title: 'Adicciones',
  slug: 'adicciones',
  _status: 'published',
  hero: pageHero(
    'Adicciones',
    'Atención profesional para problemas relacionados con el consumo de sustancias y otras conductas adictivas.',
  ),
  layout: [
    {
      blockType: 'infoCards',
      columns: '2',
      background: 'white',
      cards: [
        {
          icon: 'lifebuoy',
          title: 'Consumo de sustancias',
          text: 'Trabajamos temas relacionados con sustancias, disparadores, prevención de recaídas y los componentes emocionales de la adicción y la recuperación.',
          linkLabel: 'Ver el programa ambulatorio',
          linkUrl: '/programa',
        },
        {
          icon: 'brain',
          title: 'Trastornos concurrentes',
          text: programComponents.find((c) => c.slug === 'trastornos-concurrentes')?.body || '',
          linkLabel: 'Más información',
          linkUrl: '/servicios/trastornos-concurrentes',
        },
      ],
    },
    {
      blockType: 'infoCards',
      eyebrow: 'Más allá de las sustancias',
      heading: 'Adicciones conductuales',
      intro: 'También brindamos atención relacionada con determinadas conductas adictivas.',
      columns: '3',
      background: 'sand',
      cards: behavioralAddictions.slice(0, 3).map((b, i) => ({
        icon: b.icon,
        title: b.title,
        text: b.text,
        ...(i === 0 ? { linkLabel: 'Ver todas', linkUrl: '/adicciones-conductuales' } : {}),
      })),
    },
    {
      blockType: 'faq',
      eyebrow: 'Dudas frecuentes',
      heading: 'Preguntas frecuentes',
      background: 'white',
      items: [faqs[0], faqs[3], faqs[4]],
    },
    closingCta('El primer paso puede ser conversar', 'Toda consulta es confidencial.'),
  ],
  meta: {
    title: 'Tratamiento de adicciones',
    description:
      'Tratamiento ambulatorio de adicciones a sustancias y trastornos concurrentes en Costa Rica.',
  },
})

export const behavioralPage = (): PageData => ({
  title: 'Adicciones conductuales',
  slug: 'adicciones-conductuales',
  _status: 'published',
  hero: pageHero(
    'Adicciones conductuales',
    'Además de los problemas relacionados con sustancias, brindamos atención relacionada con determinadas conductas adictivas.',
  ),
  layout: [
    {
      blockType: 'infoCards',
      eyebrow: 'Áreas de atención',
      heading: 'Conductas que atendemos',
      columns: '3',
      background: 'white',
      cards: behavioralAddictions.map(({ icon, title, text }) => ({ icon, title, text })),
    },
    {
      blockType: 'featureList',
      eyebrow: '¿Cuándo consultar?',
      heading: 'Señales de que una conducta está generando dificultades',
      intro:
        'Cada situación es particular. Estas señales no son un diagnóstico, pero pueden indicar que es un buen momento para solicitar orientación profesional.',
      columns: '2',
      background: 'sand',
      items: [
        { text: 'Dedica cada vez más tiempo a la conducta, aun cuando desea reducirlo.' },
        { text: 'Afecta sus relaciones, su trabajo, sus estudios o sus finanzas.' },
        { text: 'Siente malestar o irritabilidad cuando no puede realizarla.' },
        { text: 'Ha intentado controlarla sin lograrlo.' },
      ],
    },
    closingCta(
      '¿Reconoce alguna de estas situaciones?',
      'Una valoración profesional puede ayudarle a identificar el siguiente paso.',
      'Solicitar una valoración',
    ),
  ],
  meta: {
    title: 'Adicciones conductuales',
    description:
      'Atención para el uso problemático de dispositivos digitales, juegos de azar y apuestas en línea, compras compulsivas y otras conductas adictivas.',
  },
})

export const familyPage = (img: SeedImages): PageData => ({
  title: 'Familia',
  slug: 'familia',
  _status: 'published',
  hero: pageHero(
    'Apoyo para las familias',
    'La recuperación también puede involucrar a quienes acompañan.',
  ),
  layout: [
    {
      blockType: 'mediaSplit',
      image: img.family,
      imagePosition: 'left',
      eyebrow: 'Educación y acompañamiento familiar',
      heading: 'Un ambiente seguro para toda la familia',
      text: `${familyIntro}\n\n${familySafeSpace}`,
      background: 'white',
    },
    {
      blockType: 'featureList',
      eyebrow: 'Temas que trabajamos',
      heading: 'Herramientas para acompañar la recuperación',
      columns: '2',
      background: 'sand',
      items: [
        { text: 'Comunicación' },
        { text: 'Sentimientos' },
        { text: 'Ansiedad y depresión dentro del entorno familiar' },
        { text: 'Codependencia' },
        { text: 'Autoestima' },
        { text: 'Habilidades para afrontar la recuperación y las recaídas' },
      ],
    },
    {
      blockType: 'faq',
      heading: 'Preguntas de las familias',
      background: 'white',
      items: [faqs[2], faqs[4]],
    },
    closingCta(
      'No tiene que atravesarlo en soledad',
      'Podemos orientarle sobre cómo acompañar a su ser querido y cuidar de usted.',
      'Quiero orientación para mi familia',
    ),
  ],
  meta: {
    title: 'Apoyo para familias',
    description:
      'Educación y acompañamiento familiar durante el proceso de recuperación de una adicción.',
  },
})

export const servicesPage = (): PageData => ({
  title: 'Otros servicios',
  slug: 'servicios',
  _status: 'published',
  hero: pageHero('Otros servicios', 'Servicios complementarios de atención, orientación y seguimiento.'),
  layout: [
    {
      blockType: 'servicesGrid',
      variant: 'bento',
      categories: ['otros'],
      background: 'white',
    },
    {
      blockType: 'servicesGrid',
      eyebrow: 'Programa Equilibrio',
      heading: 'Componentes del programa',
      categories: ['programa'],
      background: 'sand',
    },
    closingCta('¿Tiene dudas sobre qué servicio necesita?', 'Le orientamos sin compromiso.'),
  ],
  meta: {
    title: 'Otros servicios',
    description:
      'Detección e intervención breve, atención a domicilio, orientación y seguimiento de tratamiento residencial y programas para instituciones.',
  },
})

export const teamPage = (img: SeedImages): PageData => ({
  title: 'Nuestro equipo',
  slug: 'equipo',
  _status: 'published',
  hero: pageHero('Nuestro equipo', 'Acompañamiento profesional, humano y personalizado.'),
  layout: [
    {
      blockType: 'teamGrid',
      heading: 'Dirección del programa',
      background: 'white',
    },
    {
      blockType: 'mediaSplit',
      image: img.conversation,
      imagePosition: 'right',
      eyebrow: 'Nuestro propósito',
      heading: 'Recuperar bienestar, estabilidad y herramientas',
      text: `${purpose}\n\n${whoWeAreMore}`,
      background: 'sand',
    },
    closingCta('Conversemos', 'Toda consulta es confidencial.'),
  ],
  meta: {
    title: 'Nuestro equipo',
    description: 'Profesionales con más de 25 años de experiencia en tratamiento y recuperación.',
  },
})

export const faqPage = (): PageData => ({
  title: 'Preguntas frecuentes',
  slug: 'preguntas-frecuentes',
  _status: 'published',
  hero: pageHero('Preguntas frecuentes', 'Respuestas a las dudas más comunes sobre el programa.'),
  layout: [
    { blockType: 'faq', heading: 'Sobre el programa', background: 'white', items: faqs },
    closingCta('¿Tiene otra pregunta?', 'Escríbanos o llámenos; con gusto le orientamos.'),
  ],
  meta: {
    title: 'Preguntas frecuentes',
    description:
      'Duración del programa, internamiento, participación de la familia y adicciones conductuales.',
  },
})

export const contactPage = ({ form }: { form: Form }): PageData => ({
  title: 'Contacto',
  slug: 'contacto',
  _status: 'published',
  hero: pageHero(
    'El primer paso puede ser conversar',
    'Si usted o una persona cercana está enfrentando dificultades relacionadas con una adicción, puede comunicarse con nuestro equipo para recibir información sobre el programa y conocer las alternativas disponibles.',
  ),
  layout: [
    {
      blockType: 'formBlock',
      enableIntro: true,
      form,
      introContent: richText(heading('h3', 'Solicite orientación de forma confidencial')),
    },
    {
      blockType: 'locationsBlock',
      eyebrow: 'Visítenos',
      heading: 'Nuestras sedes',
      background: 'sand',
    },
  ],
  meta: {
    title: 'Contacto',
    description:
      'Contacte a Proyecto Equilibrio: +506 7168 5868. Clínica Burstin, San José. Atención 24/7.',
  },
})

// --- Páginas de los documentos de contenido entregados por el cliente ---

export const aboutPage = (img?: SeedImages): PageData => ({
  title: 'Quiénes somos',
  slug: 'quienes-somos',
  _status: 'published',
  hero: pageHero(
    'Quiénes somos',
    'En Proyecto Equilibrio creemos que cada persona merece una oportunidad para recuperar su bienestar. Somos una iniciativa costarricense de tratamiento ambulatorio que acompaña a personas y familias afectadas por el consumo problemático de alcohol y otras sustancias, desde el respeto, la confidencialidad y la atención personalizada.',
  ),
  layout: [
    {
      blockType: 'infoCards',
      eyebrow: 'Proyecto Equilibrio',
      heading: 'Una alternativa profesional, humana y cercana',
      columns: '2',
      background: 'white',
      cards: [
        {
          icon: 'compass',
          title: 'Nuestra razón de ser',
          text: 'Ofrecemos una alternativa para quienes necesitan apoyo profesional y desean continuar, cuando su situación clínica lo permite, con sus responsabilidades familiares, laborales o académicas. Reconocemos que cada proceso de recuperación es diferente y que el tratamiento debe adaptarse a las necesidades y circunstancias de la persona.',
        },
        {
          icon: 'heart',
          title: 'Nuestra filosofía de atención',
          text: 'Unimos conocimiento científico, experiencia profesional y trato humano. Buscamos crear un ambiente digno, afectuoso y respetuoso, donde la persona pueda sentirse escuchada y acompañada, sin juicios ni confrontaciones innecesarias. Nuestro propósito es ayudarle a construir cambios sostenibles y recuperar su autonomía.',
        },
        {
          icon: 'star',
          title: 'Experiencia profesional',
          text: 'El equipo de Proyecto Equilibrio reúne más de 25 años de experiencia nacional e internacional en el acompañamiento de personas con problemas relacionados con el consumo de sustancias. Su trabajo integra herramientas clínicas, educación y apoyo a las familias.',
        },
        {
          icon: 'clipboard',
          title: 'Nuestro modelo ambulatorio',
          text: 'El tratamiento comienza con una valoración profesional para definir el nivel de atención apropiado. Según las necesidades identificadas, se ofrecen intervenciones individuales, grupales, educativas y familiares, con opciones presenciales o virtuales cuando sean clínicamente adecuadas.',
        },
      ],
    },
    {
      blockType: 'featureList',
      eyebrow: 'Valoración',
      heading: '¿Qué contempla la valoración inicial?',
      intro:
        'Si la persona requiere desintoxicación supervisada, atención de crisis o un nivel de cuidado más intensivo, se recomienda la derivación correspondiente.',
      columns: '2',
      background: 'sand',
      items: [
        { text: 'El riesgo de intoxicación o abstinencia.' },
        { text: 'Las condiciones médicas y de salud mental.' },
        { text: 'La disposición al cambio.' },
        { text: 'El riesgo de recaída o consumo continuado.' },
        { text: 'El entorno de vida y recuperación.' },
      ],
    },
    {
      blockType: 'infoCards',
      eyebrow: 'Modalidades de atención',
      heading: 'Un nivel de cuidado para cada momento',
      columns: '2',
      background: 'light',
      cards: [
        {
          icon: 'calendar',
          title: 'Ambulatorio de baja intensidad',
          text: 'Acompañamiento periódico y continuidad de cuidados, de acuerdo con la valoración.',
        },
        {
          icon: 'route',
          title: 'Mediana intensidad',
          text: 'Mayor frecuencia de sesiones y seguimiento.',
        },
        {
          icon: 'shield',
          title: 'Alta intensidad',
          text: 'Intervención ambulatoria más estructurada para quienes necesitan mayor apoyo y pueden ser atendidos de forma segura sin internamiento.',
        },
        {
          icon: 'refresh',
          title: 'Cuidados continuos',
          text: 'Seguimiento y prevención de recaídas tras la fase principal del tratamiento.',
        },
      ],
    },
    ...(img
      ? [
          {
            blockType: 'mediaSplit',
            image: img.family,
            imagePosition: 'right',
            eyebrow: 'Familias',
            heading: 'La familia también forma parte del proceso',
            text: 'Cuando es pertinente y con respeto a la voluntad y confidencialidad de la persona atendida, promovemos la participación de familiares y personas significativas. Facilitamos espacios de orientación, comunicación, establecimiento de límites saludables y reconstrucción de vínculos.',
            background: 'white',
          } satisfies Block,
        ]
      : []),
    {
      blockType: 'locationsBlock',
      eyebrow: 'Dónde estamos',
      heading: 'Atención presencial y virtual',
      intro:
        'Atendemos en Clínica Burstin, San José; Mercedes Norte, Heredia; y Complejo Wilmer López, Alajuela. También ofrecemos citas virtuales. La disponibilidad de cada sede y modalidad se confirma al solicitar la cita.',
      background: 'sand',
    },
    {
      blockType: 'featureList',
      eyebrow: 'Nuestra trayectoria internacional',
      heading: 'Experiencia profesional en 11 países',
      columns: '1',
      background: 'white',
      items: [
        {
          text: 'Costa Rica, Nicaragua, Panamá, Honduras, Guatemala, El Salvador, México, Estados Unidos, República Dominicana, Colombia y Perú.',
        },
      ],
    },
    {
      blockType: 'ctaBanner',
      heading: 'Conozca nuestros programas',
      text: 'Escríbanos para recibir orientación confidencial. Emergencias por intoxicación: llame al 911.',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'accent',
            label: 'Conozca nuestros programas',
            url: '/programas-ambulatorios',
          },
        },
      ],
      showWhatsapp: true,
      showPhone: true,
    },
  ],
  meta: {
    title: 'Quiénes Somos',
    description:
      'Conozca Proyecto Equilibrio, iniciativa costarricense de tratamiento ambulatorio de adicciones con atención personalizada, apoyo familiar y opciones presenciales o virtuales.',
  },
})

export const pillarsPage = (): PageData => ({
  title: 'Programas Especializados Ambulatorios',
  slug: 'programas-ambulatorios',
  _status: 'published',
  hero: pageHero(
    'Menú de Servicios Especializados',
    'Tratamientos ambulatorios basados en la evidencia científica para la salud mental, dependencias, enfoque de género, bienestar juvenil, acompañamiento mayor y el entorno familiar.',
  ),
  layout: [
    {
      blockType: 'programCards',
      eyebrow: 'Los 7 pilares clínicos',
      heading: 'Programas Especializados Ambulatorios',
      intro: pillarsIntro,
      background: 'white',
      items: pillars,
    },
    { blockType: 'faq', heading: 'Preguntas frecuentes', background: 'sand', items: pillarsFaqs },
    closingCta(
      'Acompañamos tu camino hacia el bienestar',
      'Clínica Burstin, Avenida 14, San José, Dolorosa, Segundo Piso.',
    ),
  ],
  meta: {
    title: 'Programas Especializados Ambulatorios',
    description:
      'Descubra nuestros 7 pilares clínicos especializados en salud mental, adicciones conductuales, trastornos concurrentes, apoyo familiar y recuperación gradual para adultos mayores en San José. Enfoque científico y receptivo al trauma.',
  },
})

export const institutionsPage = (): PageData => ({
  title: 'Programas para Empresas y Colegios',
  slug: 'programas-empresas-colegios',
  _status: 'published',
  hero: {
    ...pageHero(
      'Programas para Empresas y Colegios',
      'Prevención, bienestar emocional y acompañamiento especializado en entornos laborales y educativos.',
    ),
    links: [link('Empresas', '#empresas', 'outline'), link('Colegios', '#colegios', 'outline')],
  },
  layout: [
    {
      blockType: 'infoCards',
      heading: 'Acompañamiento para organizaciones y comunidades educativas',
      intro: institutionsIntro,
      columns: '2',
      background: 'white',
      cards: [
        {
          icon: 'building',
          title: 'Empresas',
          text: 'Asistencia al empleado, detección temprana, bienestar emocional, formación de jefaturas y diseño organizacional del PAE.',
          linkLabel: 'Ver programas para empresas',
          linkUrl: '#empresas',
        },
        {
          icon: 'book',
          title: 'Colegios',
          text: 'Prevención escolar, habilidades para la vida, formación docente, trabajo con familias e intervenciones breves para adolescentes.',
          linkLabel: 'Ver programas para colegios',
          linkUrl: '#colegios',
        },
      ],
    },
    {
      blockType: 'programCards',
      anchorId: 'empresas',
      eyebrow: 'Empresas',
      heading: 'Programas para Empresas',
      intro:
        'Soluciones de asistencia y bienestar para trabajadores, equipos de liderazgo y organizaciones, con rutas claras de orientación, evaluación inicial, derivación y seguimiento.',
      background: 'light',
      items: companyPrograms,
    },
    {
      blockType: 'programCards',
      anchorId: 'colegios',
      eyebrow: 'Colegios',
      heading: 'Programas para Colegios',
      intro:
        'Prevención escolar con metodologías participativas, formación docente y desarrollo de habilidades para la vida. Las actividades se adaptarán a la edad y al contexto de cada institución.',
      background: 'white',
      items: schoolPrograms,
    },
    closingCta(
      '¿Desea una propuesta para su organización?',
      'Conversemos sobre las necesidades de su empresa o centro educativo. Por favor, no comparta información clínica sensible en este primer contacto.',
    ),
  ],
  meta: {
    title: 'Programas para Empresas y Colegios',
    description:
      'Programas de bienestar laboral, asistencia al empleado y prevención escolar de adicciones en Costa Rica. Formación, acompañamiento y habilidades para la vida.',
  },
})

export const institutePage = (): PageData => ({
  title: 'Instituto Equilibrio',
  slug: 'instituto-equilibrio',
  _status: 'published',
  hero: pageHero(
    'Instituto Equilibrio',
    'Formación y actualización profesional en prevención, tratamiento y recuperación de las adicciones.',
  ),
  layout: [
    {
      blockType: 'coursesGrid',
      eyebrow: 'Cursos',
      heading: 'Nuestra oferta académica',
      emptyText:
        'Muy pronto publicaremos aquí la oferta de cursos del Instituto Equilibrio. Escríbanos para recibir información.',
      background: 'white',
    },
  ],
  meta: {
    title: 'Instituto Equilibrio',
    description:
      'Cursos y formación del Instituto Equilibrio en prevención, tratamiento y recuperación de las adicciones.',
  },
})

// Base para revisión legal: ajustar responsable, plazos y canal de derechos antes de publicar.
export const privacyPage = (): PageData => ({
  title: 'Política de privacidad',
  slug: 'privacidad',
  _status: 'published',
  hero: pageHero(
    'Política de privacidad',
    'Cómo cuidamos la información que nos confía. Su consulta es confidencial.',
  ),
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'full',
          richText: richText(
            heading('h2', 'Quién es responsable de sus datos'),
            paragraph(
              'Proyecto Equilibrio es responsable de los datos personales que usted nos envía por este sitio, por teléfono o por WhatsApp. Los tratamos conforme a la Ley N.º 8968 de Protección de la Persona frente al Tratamiento de sus Datos Personales de Costa Rica.',
            ),
            heading('h2', 'Qué datos recogemos'),
            paragraph(
              'Solo los que usted decide darnos en el formulario de contacto: nombre, teléfono o WhatsApp, correo electrónico (opcional), para quién es la consulta y su mensaje. No le pedimos información clínica por este medio.',
            ),
            heading('h2', 'Para qué los usamos'),
            paragraph(
              'Únicamente para responder su consulta y orientarle sobre nuestros programas. No vendemos, alquilamos ni compartimos sus datos con terceros con fines comerciales, y no los usamos para enviarle publicidad sin su permiso.',
            ),
            heading('h2', 'Confidencialidad'),
            paragraph(
              'Todo el equipo está obligado al secreto profesional. La información sobre su salud o la de su familiar solo se comparte dentro del equipo tratante y con su autorización expresa.',
            ),
            heading('h2', 'Cuánto tiempo los guardamos'),
            paragraph(
              'Conservamos los datos del formulario mientras sean necesarios para atender su consulta. Si no inicia un proceso con nosotros, los eliminamos cuando ya no hacen falta.',
            ),
            heading('h2', 'Sus derechos'),
            paragraph(
              'Puede pedir en cualquier momento acceder a sus datos, corregirlos o eliminarlos escribiendo a info@proyectoequilibriocr.com. Le responderemos en un plazo razonable.',
            ),
            heading('h2', 'WhatsApp y redes sociales'),
            paragraph(
              'Si nos escribe por WhatsApp o redes sociales, esas plataformas tienen sus propias políticas de privacidad. Le recomendamos no enviar información clínica sensible por esos medios.',
            ),
          ),
        },
      ],
    },
  ],
  meta: {
    title: 'Política de privacidad',
    description: 'Cómo Proyecto Equilibrio protege los datos personales y la confidencialidad de cada consulta.',
  },
})
