// Contenido de los documentos "Programas Especializados Ambulatorios – Los 7 Pilares" y
// "Programas para Empresas y Colegios" entregados por Proyecto Equilibrio. Editable desde /admin.

import type { ProgramCardsBlock } from '@/payload-types'

type ProgramItem = Omit<NonNullable<ProgramCardsBlock['items']>[number], 'id'>

const p = (title: string, description: string, strategies: string) => ({ title, description, strategies })

export const pillarsIntro =
  'En Proyecto Equilibrio entendemos que la salud mental, las dependencias y los trastornos de la conducta no ocurren de forma aislada ni afectan a un solo perfil de persona. Cada etapa de la vida, cada entorno familiar y cada género presentan desafíos neurobiológicos y sociales completamente únicos. Por esta razón, nuestro centro ofrece un modelo de atención de vanguardia estructurado en 7 pilares clínicos especializados. A través de intervenciones personalizadas y no confrontativas, acompañamos tanto al consultante como a sus seres queridos mediante un abordaje integral que devuelve el balance, la autonomía y el bienestar a su día a día.'

export const pillars: ProgramItem[] = [
  {
    label: 'Pilar 1',
    icon: 'refresh',
    title: 'Programa de Prevención de Recaídas',
    subtitle:
      'Estrategias avanzadas de mantenimiento para sostener sus metas de recuperación a largo plazo.',
    programs: [
      p(
        'Fundamentos Generales de la Prevención de Recaídas',
        "Introducción al modelo cognitivo-conductual de Marlatt. El paciente aprende a identificar situaciones de alto riesgo, manejar determinantes ambientales y comprender el 'efecto de la violación de la abstinencia' para evitar que un desliz se convierta en una recaída total.",
        'Entrenamiento en habilidades de afrontamiento (coping), reestructuración cognitiva y balance del estilo de vida.',
      ),
      p(
        'Prevención de Recaídas en Poblaciones Diversas',
        'Intervención adaptada a las necesidades específicas considerando factores etnoculturales, de género, edad y contextos sociales. Personalizamos el plan de mantenimiento porque la recuperación no es igual para todos.',
        'Adaptación cultural de guías de tratamiento, análisis de estresores de minorías y redes de apoyo comunitarias.',
      ),
      p(
        'Tratamiento de Problemas con el Alcohol',
        'Basado en enfoques clínicos clásicos de mantenimiento de la abstinencia o metas de reducción de daños en el consumo de alcohol. Se trabaja intensamente en la presión social y los disparadores cotidianos.',
        'Ensayo conductual ante situaciones de consumo, manejo del estrés y técnicas de relajación profunda.',
      ),
      p(
        'Prevención de Recaídas para el Tabaquismo',
        'Abordaje integral para la cesación y el mantenimiento a largo plazo del consumo de nicotina, rompiendo los hábitos automáticos asociados al día a día.',
        'Reacondicionamiento de rutinas diarias, control de estímulos y estrategias cognitivas para superar el craving agudo.',
      ),
      p(
        'Prevención de Recaídas en la Dependencia de Estimulantes',
        'Programa especializado para la recuperación del consumo de cocaína, anfetaminas o metanfetaminas, enfocado en restaurar el sistema de recompensa del cerebro y manejar la anhedonia.',
        'Técnicas de mindfulness (atención plena) para el manejo de impulsos y planes de contingencia conductual.',
      ),
      p(
        'Prevención de Recaídas en la Dependencia de Opioides',
        'Estrategias específicas de mantenimiento orientadas al manejo del deseo de consumo de sustancias de forma persistente y la prevención de sobredosis, combinando el enfoque psicoterapéutico con el soporte médico.',
        'Identificación de disparadores emocionales (dolor físico/emocional) y reestructuración del entorno social.',
      ),
      p(
        'Prevención de Recaídas en el Abuso y Dependencia de Cannabis',
        'Tratamiento enfocado en desmontar la baja percepción de riesgo y abordar los factores de habituación psicológica y social ligados a la marihuana.',
        "Psicoeducación sobre el impacto cognitivo, entrenamiento en asertividad para decir 'no' y desarrollo de pasatiempos alternativos.",
      ),
      p(
        'Prevención de Recaídas en el Consumo de Drogas de Diseño, Alucinógenos, Inhalantes y Esteroides',
        'Espacio de intervención para consumos en contextos específicos (como entornos de fiesta o uso enfocado al rendimiento físico). Analiza las distorsiones cognitivas que justifican su uso.',
        'Análisis de las expectativas del consumo, gestión de la presión de pares y manejo de crisis emocionales.',
      ),
      p(
        'Prevención de Recaídas en los Trastornos de la Alimentación y Obesidad',
        'Adaptación del modelo de prevención de recaídas a conductas adictivas no químicas (comida). Se enfoca en estabilizar la relación con la alimentación y evitar los ciclos de purga o atracón inducidos por el estrés.',
        'Monitoreo emocional antes de comer, técnicas de regulación del afecto negativo y reestructuración de la imagen corporal.',
      ),
      p(
        'Tratamiento de los Trastornos de Juego',
        'Intervención especializada en ludopatía (juegos de azar, apuestas online). El objetivo central es romper las ilusiones de control sobre el azar y gestionar las urgencias financieras impulsivas.',
        'Restricción de acceso a estímulos de juego, análisis de pensamientos distorsionados sobre las ganancias y manejo del aburrimiento/ansiedad.',
      ),
      p(
        'Prevención de Recaídas en Conductas Sexuales de Riesgo',
        'Apoyo a personas que presentan patrones de hipersexualidad o conductas que ponen en peligro su salud física o estabilidad emocional, ayudándoles a canalizar su vida íntima de forma segura y satisfactoria.',
        'Planificación de conductas seguras, terapia de aceptación y compromiso, y reducción de daños asociados.',
      ),
    ],
    ctaLabel: 'Iniciar Programa de Prevención',
    whatsappMessage:
      'Hola, me interesa recibir información detallada sobre el Pilar 1 de Prevención de Recaídas.',
  },
  {
    label: 'Pilar 2',
    icon: 'family',
    title: 'Programa de Acompañamiento y Apoyo Familiar',
    subtitle:
      'Porque la recuperación no se logra en aislamiento: sanamos el entorno familiar para transformar vidas de forma integral.',
    programs: [
      p(
        'Evaluación Sistémica Familiar (Abordaje Inicial)',
        'Analizamos de forma integral la dinámica del hogar en fases para comprender su estructura, identificar fortalezas y diseñar un plan personalizado de apoyo mutuo.',
        'Entrevistas familiares estructuradas, detección de dinámicas de codependencia y mapeo de la red de apoyo.',
      ),
      p(
        'Psicoeducación: La Adicción como Trastorno Familiar',
        "Taller para dotar a la familia de herramientas teóricas y prácticas, aprendiendo a diferenciar el apoyo saludable de las conductas de 'facilitación' que mantienen el problema.",
        'Formación sobre dependencias, desmontaje de mitos y manejo constructivo de la culpa y el estigma.',
      ),
      p(
        'Comunicación Asertiva y Resolución de Conflictos',
        'Entrenamiento para sustituir reproches o silencios por un diálogo honesto y respetuoso que reconstruya los puentes afectivos dañados.',
        'Juegos de rol (role-playing), establecimiento de límites claros e indoblegables y técnicas de escucha activa.',
      ),
      p(
        'El Modelo Secuencial de Recuperación Familiar',
        'Intervenciones progresivas que avanzan al ritmo del hogar, comenzando con contención inmediata y progresando hacia la sanación relacional profunda solo cuando la familia esté lista.',
        'Planes de acción por etapas, evaluación continua y asignación de tareas conductuales en casa.',
      ),
      p(
        'Prevención de Violencia y Descarga Emocional',
        'Espacio prioritario enfocado en la seguridad física y emocional del núcleo familiar ante situaciones de alta hostilidad o crisis agudas.',
        'Guías de desactivación verbal (de-escalation), planes de seguridad del hogar y descarga emocional poscrisis.',
      ),
      p(
        'Consejería Multicultural y Diversidad Familiar',
        'Adaptación de la terapia respetando plenamente la identidad, creencias y estructuras particulares de cada hogar.',
        'Enfoque terapéutico personalizado y fomento de la justicia dentro del tratamiento.',
      ),
      p(
        'Manejo del Modelo de Cambio en el Entorno Familiar',
        'Alineamos las expectativas de los familiares sincronizándolas con la etapa real de cambio en la que se encuentra su ser querido.',
        'Sincronización de metas terapéuticas y objetivos mutuos a corto y largo plazo.',
      ),
    ],
    ctaLabel: 'Agendar Consulta Familiar',
    whatsappMessage:
      'Hola, nos gustaría agendar una evaluación inicial dentro del Pilar 2 de Acompañamiento Familiar.',
  },
  {
    label: 'Pilar 3',
    icon: 'brain',
    title: 'Programa de Tratamiento Integrado para Trastornos Concurrentes',
    subtitle:
      'Un abordaje simultáneo y unificado de la salud mental y las dependencias para una recuperación real y duradera.',
    programs: [
      p(
        'Admisión e Intervención Inicial en 12 Pasos',
        'Evaluación continua para construir una sólida alianza terapéutica y determinar colaborativamente el alcance de cada condición clínica.',
        'Entrevista clínica integrada y tamizaje multifactorial (trauma, riesgo agudo y uso de sustancias).',
      ),
      p(
        'Diagnóstico Diferencial y Perfil de Severidad',
        'Separación cuidadosa de las manifestaciones de salud mental independientes de aquellos síntomas inducidos directamente por el consumo de sustancias.',
        'Evaluación clínica continua basada en el DSM-5 y análisis de la cronicidad de los síntomas.',
      ),
      p(
        'Planificación de Metas Integradas (Metas SMART)',
        'Diseño colaborativo de una hoja de ruta flexible que aborda ambos trastornos de manera paralela y al ritmo del paciente.',
        'Establecimiento de objetivos específicos, medibles, alcanzables, relevantes y con tiempo definido (Metas SMART).',
      ),
      p(
        'Psicoeducación y Perspectiva de Problemas Múltiples',
        'Comprensión profunda de la interacción recíproca entre la salud mental y el consumo.',
        'Talleres sobre neurobiología concurrente y análisis de disparadores mutuos.',
      ),
      p(
        'Psicoterapia Integrada y Regulación del Afecto Negativo',
        'Desarrollo de habilidades prácticas de afrontamiento para tolerar el malestar emocional sin recurrir a conductas de consumo o automedicación.',
        'Técnicas cognitivo-conductuales (TCC) y manejo del craving post-agudo.',
      ),
      p(
        'Manejo de la Disposición al Cambio y Motivación',
        'Sincronización del tratamiento adaptándonos a las diferentes etapas de motivación que el paciente presenta para cada problema por separado.',
        'Entrevista motivacional adaptada y asignación de tareas conductuales por fases.',
      ),
      p(
        'Continuidad de Cuidados y Estilo de Vida Saludable',
        'Plan de mantenimiento enfocado en estructurar rutinas estables de sueño, manejo del estrés y prevención del aislamiento social.',
        'Técnicas de mindfulness y reestructuración de hábitos cotidianos.',
      ),
    ],
    ctaLabel: 'Solicitar Tratamiento Integrado',
    whatsappMessage:
      'Hola, necesito asesoría sobre el Pilar 3 de Tratamiento Integrado para Trastornos Concurrentes.',
  },
  {
    label: 'Pilar 4',
    icon: 'handHeart',
    title: 'Programa Especializado en Adicciones Conductuales y Relacionales',
    subtitle:
      'Recupere el control de sus impulsos: un enfoque unificado y científico para superar las dependencias sin sustancia y sanar sus vínculos.',
    programs: [
      p(
        'Evaluación de Componentes Adictivos y Diagnóstico',
        'Diagnóstico diferencial riguroso basado en criterios clínicos internacionales para evaluar los componentes de la conducta compulsiva y evitar el sobrediagnóstico.',
        'Entrevistas dirigidas y escalas estandarizadas de impulsividad/codependencia.',
      ),
      p(
        'Comprensión Neurobiológica y Desmontaje de Estímulos',
        'Análisis de cómo ciertas plataformas, dinámicas o entornos capturan la atención activando el sistema de recompensa del cerebro.',
        'Identificación de disparadores ambientales y reestructuración del entorno del paciente.',
      ),
      p(
        'Abordaje Clínico del Trastorno por Juego (Ludopatía)',
        'Enfoque especializado para romper las distorsiones de pensamiento sobre el control del azar en apuestas físicas u online.',
        'Restricción radical de acceso a plataformas de apuestas y educación financiera de contención.',
      ),
      p(
        'Intervención en Adicción al Sexo y Conducta Sexual Compulsiva',
        'Espacio confidencial y libre de juicios para tratar patrones de hipersexualidad o uso compulsivo de pornografía que dañan la estabilidad laboral o familiar.',
        'Identificación del ciclo compulsivo, terapia de aceptación y compromiso, y reparación del vínculo familiar.',
      ),
      p(
        'Gestión de Adicciones Digitales, Juego en Línea y Redes Sociales',
        'Tratamiento del uso problemático de internet y videojuegos, transitando hacia un uso controlado, funcional y consciente en el día a día.',
        'Protocolos de desconexión digital progresiva y límites de tiempo de pantalla.',
      ),
      p(
        'Sanación de la Codependencia y Dependencia Relacional',
        'Dirigido a quienes vuelcan su apego de manera obsesiva en otros, postergando sus propias necesidades, emociones y metas por complacer o rescatar.',
        "Desmontaje del rol de 'rescatador' y técnicas de desapego emocional saludable.",
      ),
      p(
        'Reconstrucción de la Autoestima, Límites y Asertividad',
        "Trabajo sobre el miedo profundo al abandono o al rechazo, desarrollando habilidades para decir 'no' y validar sus propias necesidades sin sumisión.",
        'Ejercicios cognitivos de autorreconocimiento y entrenamiento en comunicación asertiva.',
      ),
      p(
        'Regulación Emocional en la Adicción a la Comida',
        'Tratamiento del trastorno por atracón o alimentación compulsiva utilizada como anestésico contra la ansiedad, tristeza o aburrimiento.',
        'Registro emocional antes de comer y técnicas de tolerancia al malestar.',
      ),
      p(
        'Intervención en Compra Compulsiva y Gasto Impulsivo',
        'Apoyo para frenar las compras incontrolables utilizadas para regular el estado de ánimo y que provocan crisis económicas o familiares.',
        'Mecanismos de la demora de la respuesta impulsiva y tutorías familiares de apoyo.',
      ),
      p(
        'Procesamiento de Trauma Relacional y Heridas de la Infancia',
        'Abordaje de dinámicas familiares del pasado (negligencia, invalidación emocional) que originan las conductas compulsivas y de apego adultas.',
        'Psicoterapia adaptada al trauma y técnicas de regulación del afecto negativo.',
      ),
      p(
        'Prevención de Recaídas, Meditación y Estilo de Vida',
        'Estructuración de un plan a largo plazo para mantener el control de impulsos mediante prácticas que estabilizan la paz mental de forma natural.',
        'Técnicas de mindfulness (urge surfing), manejo del estrés cotidiano y enfoques de meditación.',
      ),
    ],
    ctaLabel: 'Tratar Dependencia Conductual',
    whatsappMessage:
      'Hola, busco apoyo confidencial en el Pilar 4 para superar una dependencia conductual o relacional.',
  },
  {
    label: 'Pilar 5',
    icon: 'sprout',
    title: 'Programa de Intervención Estratégica para Adolescentes y Adultos Jóvenes',
    subtitle:
      'Validamos su autonomía, despertamos su motivación interna y construimos alternativas saludables para el futuro.',
    programs: [
      p(
        'Vinculación Motivacional y Alianza Terapéutica Eficaz',
        'Proceso de enganche clínico inicial diseñado específicamente para jóvenes. Rompemos la barrera de la resistencia evitando el estilo directivo o punitivo, estableciendo respeto mutuo desde la primera sesión.',
        'Habilidades de la Entrevista Motivacional (preguntas abiertas, afirmaciones, reflejos y resúmenes) y expresión genuina de empatía.',
      ),
      p(
        'Evaluación del Contexto Juvenil y Estilo de Vida',
        'Análisis de la realidad diaria del joven, explorando las influencias de sus pares, su desempeño académico, el entorno familiar y las áreas de vulnerabilidad psicológica o emocional.',
        'Entrevistas confidenciales adaptadas al desarrollo evolutivo y mapeo del círculo social de influencia.',
      ),
      p(
        'Exploración de la Ambivalencia y Valores Personales',
        "Acompañamos al joven a sopesar los 'pros y contras' de sus conductas en comparación con sus metas a futuro, permitiendo que descubra autónomamente sus razones para cambiar.",
        'Clarificación de valores y balances de decisión sin confrontación.',
      ),
      p(
        'Planificación Colaborativa del Cambio',
        'Co-diseño de un plan de acción flexible donde el joven toma un papel protagónico. El equipo clínico actúa como guía para estructurar metas realistas que mitiguen los riesgos.',
        'Formulación de pasos de cambio a corto plazo, contratos conductuales autogestionados y técnicas de resolución de problemas.',
      ),
      p(
        'Entrenamiento en Habilidades de Resistencia a la Presión Social',
        'Espacio práctico para dotar al joven de la asertividad necesaria para navegar ambientes sociales o de fiesta complejos, manteniéndose firme en sus decisiones sin sufrir aislamiento.',
        'Ensayos conductuales mediante juegos de rol (role-playing) y comunicación asertiva entre pares.',
      ),
    ],
    ctaLabel: 'Consultar por un Joven / Adolescente',
    whatsappMessage:
      'Hola, necesito información sobre las alternativas de tratamiento juvenil del Pilar 5.',
  },
  {
    label: 'Pilar 6',
    icon: 'heart',
    title: 'Programa Clínico de Recuperación Especializado para Mujeres',
    subtitle:
      'Un espacio seguro y exclusivo diseñado para abordar las necesidades biológicas, sociales y de género en la recuperación.',
    programs: [
      p(
        'Admisión Especializada y Detección del Efecto Telescópico',
        'Evaluación inicial enfocada en el impacto acelerado que las conductas adictivas tienen en la salud física y psicológica de las mujeres (efecto telescópico). Construimos un espacio de contención libre de estigmas desde el primer contacto.',
        'Tamizaje sensible al género, detección de barreras socioeconómicas de acceso y evaluación de la salud física integral.',
      ),
      p(
        'Intervención en Trastornos Concurrentes y Trauma Comórbido',
        'Abordaje unificado de la alta prevalencia de trastornos comórbidos específicos en mujeres asociados al ciclo de consumo o dependencia.',
        'Psicoterapia integrada para el trauma, técnicas cognitivo-conductuales (TCC) adaptadas y regulación emocional del afecto negativo.',
      ),
      p(
        'Reestructuración de Vínculos, Maternidad y Cuidado',
        'Espacio para procesar el impacto de las dependencias en los roles familiares, la culpa social asociada a la maternidad, el trauma de las parejas y el cuidado de los hijos.',
        'Talleres sobre parentalidad positiva, desmontaje del estigma de género y dinámicas de reparación de vínculos afectivos.',
      ),
      p(
        'Habilidades Clínicas de Afrontamiento y Manejo de la Recaída',
        'Entrenamiento en estrategias conductuales adaptadas a los disparadores de recaída más comunes en mujeres.',
        'Ensayos de prevención de recaídas, control de estímulos interpersonales y técnicas de asertividad para la autodefensa emocional.',
      ),
      p(
        'Soporte Mutuo en Formato No Confrontativo',
        'Sesiones organizadas bajo una estructura protectora y colaborativa que enfatiza las experiencias comunes sobre las diferencias, facilitando que las participantes asuman diversos niveles de participación a su propio ritmo.',
        'Formatos de inscripción flexibles, dinámicas grupales horizontales basadas en el autorespeto mutuo y guiones de práctica de habilidades estructurados.',
      ),
    ],
    ctaLabel: 'Ingresar a Espacio de Mujeres',
    whatsappMessage:
      'Hola, solicito información confidencial sobre el Pilar 6 grupal especializado para mujeres.',
  },
  {
    label: 'Pilar 7',
    icon: 'sun',
    title: 'Programa de Atención Integral y Recuperación Gradual para Adultos Mayores',
    subtitle:
      'Respetamos su historia, protegemos su salud física y adaptamos el tratamiento a su ritmo y necesidades de vida actuales.',
    programs: [
      p(
        'Detección Sutil y Evaluación del Estilo de Vida Geriátrico',
        'Evaluamos a personas de 55 años o más de forma sensible y libre de la confrontación tradicional. Evitamos el prejuicio de edad (edadismo), indagando cómo interactúan el uso de sustancias o las conductas compulsivas con el funcionamiento sensorial, cognitivo y de movilidad.',
        'Uso clínico del indicador sutil SAMI, evaluación de la red de apoyo social y detección temprana de cambios neurológicos.',
      ),
      p(
        'Filosofía de Recuperación Gradual y Alcance Comunitario (Outreach)',
        'El tratamiento no impone la abstinencia inmediata como requisito obligatorio de ingreso. Nos trasladamos al propio hogar del paciente (outreach) para superar barreras de transporte o movilidad, resolviendo primero las necesidades básicas o de vivienda más urgentes y avanzando progresivamente.',
        'Visitas domiciliarias programadas, planes de metas terapéuticas flexibles basados en las prioridades del consultante y gestión intensiva de casos.',
      ),
      p(
        'Intervención Diferencial según la Edad de Inicio',
        'Dividimos el abordaje clínico en dos tipologías esenciales para garantizar su efectividad: el Inicio Temprano (consumo crónico que requiere reconstruir pasatiempos, habilidades sociales y apoyo material) y el Inicio Tardío (dependencias que surgen tras crisis de la vejez, la jubilación o duelos acumulados).',
        'Terapia adaptada al proceso de duelo gerontológico, revisión e integración de la historia de vida positiva y fortalecimiento de la relación paciente-consejero.',
      ),
      p(
        'Educación en Polifarmacia y Reducción Gradual de Fármacos',
        'Dado que el envejecimiento reduce la tolerancia física y ralentiza la eliminación de sustancias, educamos sobre el alto riesgo latente de combinar alcohol con depresores del SNC (como benzodiacepinas, opioides o analgésicos). Coordinamos procesos de desintoxicación seguros.',
        'Protocolos de reducción muy lenta de medicamentos (tapering), supervisión colaborativa con los médicos tratantes y guías prácticas de seguridad en casa.',
      ),
      p(
        'Inclusión Social, Ocio con Propósito y Abordaje Concurrente',
        'Combatimos activamente el aislamiento y la soledad ayudando a la persona mayor a redefinir el concepto de ocio y juego saludable. Evaluamos y tratamos de forma paralela la adicción con condiciones de salud mental como la depresión o el deterioro cognitivo geriátrico.',
        'Programación social y recreativa adaptada con pares, uso de la Escala de Depresión Geriátrica (GDS) e intervenciones dirigidas a mitigar la confusión cognitiva.',
      ),
    ],
    ctaLabel: 'Solicitar Acompañamiento Adulto Mayor',
    whatsappMessage:
      'Hola, necesito coordinar una orientación o visita de apoyo para el Pilar 7 de Adultos Mayores.',
  },
]

export const pillarsFaqs = [
  {
    question: "¿Qué significa un programa 'Ambulatorio'?",
    answer:
      'Significa que el consultante asiste a sus sesiones individuales, grupales o familiares programadas en nuestro centro clínico y luego regresa a su vida cotidiana. No requiere internamiento, lo que permite mantener la estructura de sus actividades laborales, académicas o familiares normales.',
  },
  {
    question: "¿Qué es un 'Programa Receptivo al Trauma'?",
    answer:
      'Es un enfoque de atención médica que asume que muchos trastornos conductuales o dependencias son, en realidad, mecanismos de adaptación frente a heridas emocionales o experiencias adversas del pasado. Creamos un entorno seguro, sin confrontación ni juicios, enfocado en sanar la causa raíz.',
  },
  {
    question: '¿Cómo se integran las familias en el proceso?',
    answer:
      'A través de nuestro Pilar 2, ofrecemos espacios diseñados exclusivamente para el núcleo familiar. La meta es dotar a los seres queridos de estrategias de comunicación y límites sanos, reduciendo la codependencia y transformando el hogar en un pilar para el bienestar común.',
  },
]

// --- Empresas y colegios ---

export const institutionsIntro =
  'En Proyecto Equilibrio acompañamos a organizaciones y comunidades educativas en la prevención de riesgos psicosociales, el fortalecimiento de habilidades y el acceso oportuno a orientación profesional. Diseñamos intervenciones adaptadas a las necesidades de cada empresa o centro educativo, respetando la confidencialidad, el contexto institucional y la dignidad de cada persona.'

const company = (
  n: number,
  icon: ProgramItem['icon'],
  title: string,
  subtitle: string,
  description: string,
  strategies: string,
  ctaLabel: string,
): ProgramItem => ({
  label: `Empresa ${n}`,
  icon,
  title,
  subtitle,
  description,
  strategies,
  ctaLabel,
  whatsappMessage: `Hola, deseo información sobre el programa para empresas: ${title}.`,
})

const school = (
  n: number,
  icon: ProgramItem['icon'],
  title: string,
  subtitle: string,
  description: string,
  strategies: string,
  ctaLabel: string,
  whatsappMessage = `Hola, deseo información sobre el programa para colegios: ${title}.`,
): ProgramItem => ({
  label: `Colegio ${n}`,
  icon,
  title,
  subtitle,
  description,
  strategies,
  ctaLabel,
  whatsappMessage,
})

export const companyPrograms: ProgramItem[] = [
  company(
    1,
    'building',
    'Programa de Asistencia al Empleado (PAE)',
    'Acceso confidencial a orientación y apoyo oportuno.',
    'Modelo de atención para colaboradores con dificultades personales, familiares o laborales que afectan su bienestar o funcionamiento.',
    'Orientación inicial; evaluación de necesidades; derivación a servicios apropiados; seguimiento acordado.',
    'Solicitar Programa PAE',
  ),
  company(
    2,
    'search',
    'Detección Temprana y Orientación ante Consumo Problemático',
    'Identificar necesidades sin estigmatizar.',
    'Acompañamiento para reconocer señales de problemas relacionados con alcohol y otras sustancias y facilitar el acceso a evaluación especializada.',
    'Psicoeducación; entrevista inicial; criterios de derivación; coordinación con profesionales autorizados.',
    'Consultar Prevención Laboral',
  ),
  company(
    3,
    'sun',
    'Bienestar Emocional y Manejo del Estrés Laboral',
    'Herramientas para afrontar las exigencias cotidianas.',
    'Sesiones para fortalecer autocuidado, afrontamiento, comunicación y búsqueda temprana de apoyo.',
    'Talleres participativos; identificación de estresores; habilidades de afrontamiento; recursos de apoyo.',
    'Solicitar Taller de Bienestar',
  ),
  company(
    4,
    'users',
    'Formación de Jefaturas y Recursos Humanos',
    'Liderazgo preparado para orientar sin diagnosticar.',
    'Capacitación para reconocer cambios observables en el desempeño, conversar de manera respetuosa y canalizar a servicios de ayuda.',
    'Protocolos de referencia; conversaciones de apoyo; límites de rol; confidencialidad.',
    'Capacitar a mi Equipo',
  ),
  company(
    5,
    'family',
    'Apoyo Familiar y Conciliación Personal-Laboral',
    'Bienestar del colaborador y su entorno.',
    'Orientación ante conflictos familiares y desafíos que repercuten en la vida laboral, sin sustituir la atención especializada.',
    'Evaluación de necesidades; orientación familiar; derivación; fortalecimiento de redes de apoyo.',
    'Consultar Apoyo Familiar',
  ),
  company(
    6,
    'clipboard',
    'Asesoría Organizacional y Diseño del PAE',
    'Un programa adaptado a cada organización.',
    'Diseño de rutas de acceso, políticas de confidencialidad, divulgación interna y evaluación agregada del servicio.',
    'Diagnóstico institucional; protocolos; comunicación a colaboradores; indicadores no identificables.',
    'Solicitar Propuesta Empresarial',
  ),
]

export const schoolPrograms: ProgramItem[] = [
  school(
    1,
    'shield',
    'Prevención Escolar de Alcohol, Tabaco y Otras Drogas',
    'Información, pensamiento crítico y decisiones saludables.',
    'Propuesta de prevención mediante habilidades para la vida, participación activa y fortalecimiento de factores protectores.',
    'Sesiones participativas; creencias normativas; información ajustada a la edad; evaluación de implementación.',
    'Consultar Prevención Escolar',
  ),
  school(
    2,
    'compass',
    'Habilidades para la Vida y Toma de Decisiones',
    'Aprender a decidir, comunicar y resolver problemas.',
    'Entrenamiento educativo en autoconocimiento, empatía, comunicación asertiva, pensamiento crítico y resolución de conflictos.',
    'Dinámicas grupales; análisis de situaciones; dramatizaciones; establecimiento de objetivos.',
    'Solicitar Programa de Habilidades',
  ),
  school(
    3,
    'users',
    'Presión de Grupo y Asertividad',
    'Fortalecer la autonomía frente a las influencias sociales.',
    'Actividades para reconocer la presión de pares, ensayar respuestas y promover decisiones propias.',
    'Juegos de rol; discusión guiada; estrategias de rechazo; apoyo entre pares.',
    'Consultar Taller de Asertividad',
  ),
  school(
    4,
    'heart',
    'Gestión de Emociones y Afrontamiento',
    'Recursos para manejar tensiones cotidianas.',
    'Actividades preventivas de reconocimiento emocional, manejo de dificultades y búsqueda de ayuda adulta cuando corresponda.',
    'Identificación de emociones; afrontamiento; resolución de problemas; redes de apoyo.',
    'Solicitar Taller Emocional',
  ),
  school(
    5,
    'book',
    'Capacitación para Docentes y Orientación',
    'Equipos educativos preparados para prevenir.',
    'Formación previa para facilitar sesiones participativas y reconocer cuándo activar los protocolos de orientación y protección escolar.',
    'Metodología participativa; planificación de sesiones; límites del rol docente; rutas de derivación.',
    'Capacitar al Personal Docente',
  ),
  school(
    6,
    'home',
    'Familias y Comunidad Educativa',
    'La prevención también se construye en casa.',
    'Encuentros para alinear mensajes preventivos, fortalecer comunicación familia-colegio y promover normas escolares claras.',
    'Talleres con familias; comunicación preventiva; pautas institucionales; coordinación con orientación.',
    'Consultar Programa para Familias',
  ),
  school(
    7,
    'calendar',
    'Programa Integral de Prevención Escolar: 12 Sesiones',
    'Una secuencia educativa estructurada.',
    'Acompañamiento institucional para planificar la aplicación de las 12 unidades del manual original por docentes formados, sujeto a los permisos y materiales que correspondan.',
    'Planificación; capacitación; coordinación escolar; seguimiento de implementación; evaluación.',
    'Consultar Prevención Escolar',
    'Hola, deseo información sobre el programa para colegios: Implementación del Programa Integral de Prevención Escolar: 12 Sesiones.',
  ),
  {
    ...school(
      8,
      'chat',
      'Programa de Intervenciones Breves para Adolescentes',
      'Atención temprana, cercana y sin juicios para adolescentes que necesitan orientación y apoyo.',
      'Intervención breve, individualizada y confidencial, adecuada a la etapa del desarrollo, dirigida a adolescentes con señales iniciales de consumo de alcohol, cannabis u otras sustancias, o conductas de riesgo asociadas. Busca fortalecer la motivación personal, identificar factores protectores y facilitar decisiones saludables. No sustituye la evaluación ni el tratamiento especializado cuando estos sean necesarios.',
      'Entrevista motivacional; detección y valoración inicial de riesgos; retroalimentación personalizada; definición colaborativa de metas; habilidades para afrontar presión social; plan breve de cambio y reducción de riesgos; seguimiento y derivación cuando corresponda.',
      'Solicitar Intervención Breve para Adolescentes',
      'Hola, deseo información sobre el Programa de Intervenciones Breves para Adolescentes en colegios.',
    ),
    modality:
      'Sesiones breves individuales con profesionales capacitados; coordinación con orientación escolar y participación familiar cuando resulte pertinente, respetando la privacidad y los protocolos de protección de personas menores de edad.',
    note: 'Por su privacidad, no envíe información clínica sensible por WhatsApp.',
  },
]
