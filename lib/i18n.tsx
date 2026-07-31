'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

export type Locale = 'es' | 'en'

export interface Translations {
  nav: {
    about: string
    experience: string
    projects: string
    contact: string
  }
  hero: {
    role: string
    tagline: string
    downloadCV: string
    viewProjects: string
  }
  about: {
    title: string
    bio: string
    stackTitle: string
    categories: {
      bi: string
      programming: string
      cloud: string
      integration: string
    }
  }
  experience: {
    title: string
    present: string
    founder: string
    dataAnalyst: string
    matercellDesc: string
    biosDesc: string
  }
  projects: {
    title: string
    viewDetail: string
    comingSoon: string
    viewRepo: string
    viewDemo: string
    problem: string
    solution: string
    stack: string
    close: string
  }
  contact: {
    title: string
    subtitle: string
    downloadCV: string
    getInTouch: string
  }
  footer: {
    rights: string
  }
}

const es: Translations = {
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    role: 'Analytics Engineer · IA & Datos Aplicados a Inteligencia Comercial',
    tagline: 'Convierto datos comerciales en decisiones. Pipelines end-to-end, dashboards accionables e IA aplicada.',
    downloadCV: 'Descargar CV',
    viewProjects: 'Ver proyectos',
  },
  about: {
    title: 'Sobre mí',
    bio: 'Soy Analytics Engineer con foco en inteligencia comercial: construyo pipelines de datos desde APIs y CRMs hasta dashboards, y aplico IA para acelerar el diagnóstico de negocio y la toma de decisiones en áreas de Marketing y Comercial. Me muevo con comodidad entre el código y la estrategia, priorizando siempre el impacto medible.',
    stackTitle: 'Stack técnico',
    categories: {
      bi: 'BI & Visualización',
      programming: 'Programación',
      cloud: 'Cloud & Datos',
      integration: 'Integración & IA',
    },
  },
  experience: {
    title: 'Experiencia',
    present: 'Presente',
    founder: 'Founder',
    dataAnalyst: 'Data Analyst',
    matercellDesc:
      'Diseño y mantenimiento de pipelines de datos, dashboards de performance comercial y análisis de indicadores clave para la toma de decisiones en Marketing y Ventas.',
    biosDesc:
      'Fundación y gestión integral de un emprendimiento de decoración: desde operaciones y marketing hasta análisis de métricas de negocio y estrategia comercial.',
  },
  projects: {
    title: 'Proyectos',
    viewDetail: 'Ver detalle',
    comingSoon: 'Próximamente',
    viewRepo: 'Ver repositorio',
    viewDemo: 'Ver demo',
    problem: 'Problema',
    solution: 'Solución',
    stack: 'Stack',
    close: 'Cerrar',
  },
  contact: {
    title: '¿Hablamos?',
    subtitle: 'Abierto a nuevas oportunidades y conversaciones sobre datos, IA y negocio.',
    downloadCV: 'Descargar CV',
    getInTouch: 'Escribir',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
}

const en: Translations = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    role: 'Analytics Engineer · AI & Data Applied to Commercial Intelligence',
    tagline: 'I turn commercial data into decisions. End-to-end pipelines, actionable dashboards, and applied AI.',
    downloadCV: 'Download CV',
    viewProjects: 'View projects',
  },
  about: {
    title: 'About me',
    bio: 'I am an Analytics Engineer focused on commercial intelligence: I build data pipelines from APIs and CRMs to dashboards, and apply AI to accelerate business diagnosis and decision-making in Marketing and Sales. I move comfortably between code and strategy, always prioritizing measurable impact.',
    stackTitle: 'Tech stack',
    categories: {
      bi: 'BI & Visualization',
      programming: 'Programming',
      cloud: 'Cloud & Data',
      integration: 'Integration & AI',
    },
  },
  experience: {
    title: 'Experience',
    present: 'Present',
    founder: 'Founder',
    dataAnalyst: 'Data Analyst',
    matercellDesc:
      'Design and maintenance of data pipelines, commercial performance dashboards, and analysis of key indicators for decision-making in Marketing and Sales.',
    biosDesc:
      'Founded and managed a decoration business end-to-end: from operations and marketing to business metrics analysis and commercial strategy.',
  },
  projects: {
    title: 'Projects',
    viewDetail: 'View details',
    comingSoon: 'Coming soon',
    viewRepo: 'View repository',
    viewDemo: 'Live demo',
    problem: 'Problem',
    solution: 'Solution',
    stack: 'Stack',
    close: 'Close',
  },
  contact: {
    title: "Let's talk",
    subtitle: 'Open to new opportunities and conversations about data, AI, and business.',
    downloadCV: 'Download CV',
    getInTouch: 'Get in touch',
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export const translations: Record<Locale, Translations> = { es, en }

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'es',
  setLocale: () => {},
  t: es,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('es')
  return (
    <I18nContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
