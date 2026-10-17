// Contenido inicial tomado del documento "Contenido propuesto para sitio web" de Proyecto Equilibrio,
// la infografía y el sitio actual (proyectoequilibriocr.com). Todo es editable luego desde /admin.
// Tono: "usted", profesional, humano y respetuoso; sin promesas de resultados clínicos.

import type { IconName } from '@/fields/icon'

export const settings = {
  phones: [{ number: '+506 7168 5868' }, { number: '+506 8374 3617' }, { number: '+506 8845 2883' }],
  // El documento indica "WhatsApp / Llamar: +506 7168 5868"
  whatsapp: '50671685868',
  whatsappMessage: 'Hola, quisiera recibir orientación sobre el programa de Proyecto Equilibrio.',
  emails: [{ email: 'info@proyectoequilibriocr.com' }, { email: 'proyectoequilibrio1@gmail.com' }],
  hours: 'Lunes a domingo · 24/7',
  crisisEnabled: true,
  crisisText: '¿Está en peligro inmediato o ante una intoxicación?',
  tagline: 'Acompañamos tu camino hacia el bienestar',
  footerAbout:
    'Tratamiento y recuperación ambulatoria. Un espacio seguro, profesional y humano para iniciar y sostener un proceso de recuperación.',
  facebook: 'https://www.facebook.com/Proyecto-Equilibrio-107687265069164',
  instagram: 'https://instagram.com/proyectoequilibriocr',
}

export const team = [
  {
    name: 'Jessica Bolaños',
    credentials: 'Dra.',
    role: 'Directora de Tratamiento',
    bio: 'Liderazgo clínico con un enfoque humano y tratamiento basado en evidencia.',
    focus: 'Liderazgo clínico · Enfoque humano · Basado en evidencia',
    order: 1,
  },
  {
    name: 'Gonzalo Esquivel',
    credentials: 'CCAD IV',
    role: 'Director de Gestión de Recuperación',
    bio: 'Coordinación, seguimiento continuo y acompañamiento durante el proceso de recuperación.',
    focus: 'Coordinación · Seguimiento continuo · Acompañamiento',
    order: 2,
  },
]

export const locations = [
  {
    name: 'San José',
    place: 'Clínica Burstin',
    address: 'Avenida 14, San José, Dolorosa. Segundo piso.',
    reference: 'Costado norte del Hospital Clínica Bíblica, frente a la farmacia del hospital.',
    // Búsquedas por nombre; reemplazar por los enlaces exactos de la sede cuando estén disponibles
    wazeUrl: 'https://waze.com/ul?q=Cl%C3%ADnica%20Burstin%20San%20Jos%C3%A9&navigate=yes',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Burstin+San+Jos%C3%A9+Costa+Rica',
    order: 1,
  },
  { name: 'Heredia', place: 'Mercedes Norte', order: 2 },
  { name: 'Alajuela', place: 'Complejo Wilmer López', order: 3 },
]

type ServiceSeed = {
  title: string
  slug: string
  summary: string
  body?: string
  icon: IconName
  category: 'programa' | 'otros' | 'conductuales'
}

export const programComponents: ServiceSeed[] = [
  {
    title: 'Programa principal',
    slug: 'programa-principal',
    icon: 'book',
    category: 'programa',
    summary: 'La base educativa de las primeras etapas de recuperación.',
    body: 'Constituye la base educativa de las primeras etapas de recuperación. Se trabajan temas relacionados con sustancias, terminología, disparadores, prevención de recaídas y componentes emocionales relacionados con la adicción y la recuperación. El material establece una duración de tres meses para esta etapa.',
  },
  {
    title: 'Administración de la recuperación',
    slug: 'administracion-de-la-recuperacion',
    icon: 'route',
    category: 'programa',
    summary: 'Acompañamiento mediante sesiones intermedias y de finalización.',
    body: 'El acompañamiento continúa mediante sesiones intermedias y de finalización. Se profundiza en aspectos como autoayuda, relaciones familiares y sociales, pérdida y duelo, administración del dinero, nutrición, ejercicio, dolor crónico, estrategias para adultos mayores y prevención avanzada de recaídas, entre otros contenidos.',
  },
  {
    title: 'Trastornos concurrentes',
    slug: 'trastornos-concurrentes',
    icon: 'brain',
    category: 'programa',
    summary: 'Atención cuando coexisten el consumo de sustancias y otros problemas de salud mental.',
    body: 'Se abordan situaciones en las que existen necesidades relacionadas tanto con el consumo de sustancias como con otros problemas de salud mental. El programa contempla educación sobre recuperación, grupos de autoayuda, uso de medicamentos y prevención de recaídas, integrando este componente con las diferentes etapas del tratamiento.',
  },
  {
    title: 'Educación y acompañamiento familiar',
    slug: 'educacion-familiar',
    icon: 'family',
    category: 'programa',
    summary: 'Comprensión, comunicación y herramientas para la familia durante el proceso.',
    body: 'La familia puede desempeñar un papel importante dentro del proceso de recuperación. El programa busca favorecer la comprensión de los trastornos por uso de sustancias y sus efectos sobre la familia, así como trabajar comunicación, sentimientos, codependencia, autoestima y herramientas para afrontar la adicción, la recuperación y las recaídas.',
  },
]

export const otherServices: ServiceSeed[] = [
  {
    title: 'Detección e intervención breve',
    slug: 'deteccion-e-intervencion-breve',
    icon: 'search',
    category: 'otros',
    summary: 'Identificación temprana y orientación oportuna.',
  },
  {
    title: 'Atención o servicios a domicilio',
    slug: 'atencion-a-domicilio',
    icon: 'home',
    category: 'otros',
    summary: 'Atención profesional en el hogar cuando la situación lo requiere.',
  },
  {
    title: 'Orientación para seleccionar un tratamiento residencial',
    slug: 'seleccion-de-tratamiento-residencial',
    icon: 'compass',
    category: 'otros',
    summary: 'Orientación para elegir un tratamiento residencial cuando sea necesario.',
  },
  {
    title: 'Seguimiento después de un tratamiento residencial',
    slug: 'seguimiento-post-residencial',
    icon: 'calendar',
    category: 'otros',
    summary: 'Continuidad del acompañamiento al finalizar un tratamiento residencial.',
  },
  {
    title: 'Programas para empresas e instituciones',
    slug: 'programas-para-instituciones',
    icon: 'building',
    category: 'otros',
    summary:
      'Programas de educación, prevención, tratamiento y recuperación para empresas, centros educativos y otras instituciones.',
  },
  {
    title: 'Acompañamiento en las etapas de la recuperación',
    slug: 'acompanamiento-en-la-recuperacion',
    icon: 'handHeart',
    category: 'otros',
    summary: 'Acompañamiento durante las diferentes etapas del proceso de recuperación.',
  },
]

export const services = [...programComponents, ...otherServices]

// Los títulos vienen del documento; las descripciones cortas son una propuesta a validar por el equipo.
export const behavioralAddictions: { icon: IconName; title: string; text: string }[] = [
  {
    icon: 'smartphone',
    title: 'Dispositivos digitales',
    text: 'Uso problemático de celulares, redes sociales, videojuegos e internet.',
  },
  {
    icon: 'star',
    title: 'Juegos de azar y apuestas en línea',
    text: 'Casinos, loterías, apuestas deportivas y plataformas en línea.',
  },
  { icon: 'heart', title: 'Sexo', text: 'Conductas sexuales que se vuelven difíciles de controlar.' },
  { icon: 'users', title: 'Relaciones', text: 'Vínculos que generan dependencia y malestar.' },
  { icon: 'search', title: 'Compras compulsivas', text: 'Compras que se repiten pese a sus consecuencias.' },
  {
    icon: 'sun',
    title: 'Ejercicio',
    text: 'Actividad física excesiva que afecta la salud y la vida cotidiana.',
  },
]

export const whoWeAre =
  'Somos un equipo de profesionales con más de 25 años de experiencia, que integra ciencia, empatía, respeto y un acompañamiento humano durante el proceso de recuperación.'

export const whoWeAreMore =
  'Ofrecemos una alternativa flexible para personas que no requieren internamiento o cuyas circunstancias permiten realizar un tratamiento ambulatorio. Nuestro abordaje es individualizado, intensivo y basado en prácticas con evidencia científica, adaptando el proceso a las necesidades particulares de cada persona.'

export const purpose =
  'Ayudar a las personas a recuperar bienestar, estabilidad y herramientas para construir y mantener una vida en recuperación.'

export const outpatientIntro =
  'El tratamiento ambulatorio está dirigido a personas que pueden realizar su proceso de recuperación sin requerir internamiento y que cuentan con los recursos y condiciones necesarios para participar exitosamente en esta modalidad.'

export const outpatientFormat =
  'El programa se adapta a las necesidades de cada participante y combina sesiones individuales, psicoeducativas y grupales.'

export const duration =
  'El material del programa contempla una etapa inicial intensiva de al menos 90 días, seguida por acompañamiento y soporte durante el primer año de recuperación. La duración y modalidad deben ajustarse a las necesidades de cada persona.'

export const familyIntro =
  'La adicción puede afectar no solamente a la persona, sino también a quienes forman parte de su entorno. Por eso, Proyecto Equilibrio incorpora un componente de educación y acompañamiento familiar.'

export const familySafeSpace =
  'Buscamos crear un ambiente seguro en el que las personas puedan sentirse respetadas y escuchadas, reconociendo y fortaleciendo los recursos individuales de cada integrante de la familia.'

export const faqs = [
  {
    question: '¿Necesito internarme para recibir tratamiento?',
    answer:
      'El programa está concebido como una alternativa para personas que no cumplen criterios de internamiento y que cuentan con condiciones adecuadas para realizar tratamiento ambulatorio.',
  },
  {
    question: '¿Cuánto dura el programa?',
    answer:
      'El material contempla una fase inicial intensiva de al menos 90 días y posteriormente un período de seguimiento y soporte durante el primer año.',
  },
  {
    question: '¿La familia puede participar?',
    answer:
      'Sí. La educación y participación familiar forman parte de los componentes contemplados por el programa.',
  },
  {
    question: '¿Atienden únicamente problemas relacionados con sustancias?',
    answer:
      'No. También se atienden determinadas adicciones conductuales, incluyendo juegos de azar y apuestas en línea, uso problemático de dispositivos digitales, compras compulsivas y otras conductas.',
  },
  {
    question: '¿Cómo sé si el tratamiento ambulatorio es adecuado para mí o para un familiar?',
    answer:
      'La conveniencia de un tratamiento ambulatorio depende de las circunstancias y necesidades de cada persona. Lo apropiado es comenzar con una valoración profesional para determinar la modalidad de atención correspondiente.',
  },
]
