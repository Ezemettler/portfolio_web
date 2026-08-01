export interface Project {
  id: string
  slug: string
  comingSoon?: boolean
  stack: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
  title: {
    es: string
    en: string
  }
  summary: {
    es: string
    en: string
  }
  problem: {
    es: string
    en: string
  }
  solution: {
    es: string
    en: string
  }
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'pipeline-cotizacion-usd-bcra',
    image: '/images/project-bcra.png',
    githubUrl: 'https://github.com/Ezemettler',
    stack: ['Python', 'Pandas', 'BCRA API', 'Google Cloud Functions', 'Cloud Scheduler', 'Looker Studio'],
    title: {
      es: 'Pipeline Cotización USD / BCRA',
      en: 'USD / BCRA Exchange Rate Pipeline',
    },
    summary: {
      es: 'Extracción automática de cotizaciones del dólar y variables económicas vía API del BCRA.',
      en: 'Automated extraction of dollar exchange rates and economic variables via the BCRA API.',
    },
    problem: {
      es: 'Necesidad de monitorear en tiempo real las variaciones del tipo de cambio y variables económicas publicadas por el Banco Central de la República Argentina para la toma de decisiones comerciales.',
      en: 'Need to monitor in real time exchange rate variations and economic variables published by the Argentine Central Bank for commercial decision-making.',
    },
    solution: {
      es: 'Pipeline completamente automatizado: extracción vía API del BCRA en Python/Pandas, procesamiento y limpieza de datos, almacenamiento en Cloud, ejecución semanal con Google Cloud Functions + Scheduler, y visualización interactiva en Looker Studio.',
      en: 'Fully automated pipeline: extraction via BCRA API using Python/Pandas, data processing and cleaning, Cloud storage, weekly execution with Google Cloud Functions + Scheduler, and interactive visualization in Looker Studio.',
    },
  },
  {
    id: '2',
    slug: 'dashboard-ventas',
    image: '/images/project-sales.png',
    githubUrl: 'https://github.com/Ezemettler',
    stack: ['Python', 'Pandas', 'Power BI', 'DAX', 'Excel'],
    title: {
      es: 'Dashboard de Ventas',
      en: 'Sales Dashboard',
    },
    summary: {
      es: 'Análisis de performance de ventas con limpieza en Python y visualización en Power BI.',
      en: 'Sales performance analysis with Python data cleaning and Power BI visualization.',
    },
    problem: {
      es: 'Dataset público de ventas sin estructura analítica clara: datos sucios, sin métricas de performance definidas y sin visualización que facilite la toma de decisiones.',
      en: 'Public sales dataset without clear analytical structure: dirty data, no defined performance metrics, and no visualization to support decision-making.',
    },
    solution: {
      es: 'Limpieza y transformación completa del dataset en Python/Pandas, modelado de datos y cálculo de KPIs clave (conversión, ticket promedio, tendencias), y construcción de un tablero de control interactivo en Power BI con filtros por período, región y producto.',
      en: 'Complete dataset cleaning and transformation in Python/Pandas, data modeling and calculation of key KPIs (conversion, average ticket, trends), and construction of an interactive control panel in Power BI with filters by period, region, and product.',
    },
  },
  {
    id: '3',
    slug: 'web-farmacias-turno',
    image: '/images/project-farmacias.png',
    stack: ['Python', 'Web Scraping', 'BigQuery', 'Google Cloud', 'Next.js'],
    title: {
      es: 'Web Farmacias de Turno',
      en: 'On-Call Pharmacies Website',
    },
    summary: {
      es: 'Sitio con información de farmacias de turno actualizada vía scraping automatizado y datos en BigQuery.',
      en: 'Website with up-to-date on-call pharmacy information via automated scraping and BigQuery.',
    },
    problem: {
      es: 'Información de farmacias de turno dispersa y desactualizada. Los usuarios necesitan acceso rápido y confiable a qué farmacias están disponibles en su zona.',
      en: 'Scattered and outdated on-call pharmacy information. Users need fast and reliable access to which pharmacies are available in their area.',
    },
    solution: {
      es: 'Scraping automatizado de fuentes oficiales de datos de farmacias, almacenamiento y consulta en BigQuery, y web pública que consume esos datos en tiempo real para mostrar la información actualizada.',
      en: 'Automated scraping of official pharmacy data sources, storage and querying in BigQuery, and a public website that consumes that data in real time to display updated information.',
    },
  },
  {
    id: '4',
    slug: 'tablero-estudio-juridico',
    image: '/images/project-juridico.png',
    stack: ['Power BI', 'SQL', 'DAX', 'Excel'],
    title: {
      es: 'Tablero Estudio Jurídico',
      en: 'Law Firm Dashboard',
    },
    summary: {
      es: 'Dashboard de gestión para un estudio jurídico: seguimiento de causas, facturación y performance del equipo.',
      en: 'Management dashboard for a law firm: case tracking, billing, and team performance.',
    },
    problem: {
      es: 'El estudio no contaba con visibilidad centralizada sobre el estado de las causas, la facturación por cliente/abogado y los tiempos de resolución, lo que dificultaba la gestión operativa.',
      en: 'The firm lacked centralized visibility on case status, billing per client/lawyer, and resolution times, making operational management difficult.',
    },
    solution: {
      es: 'Tablero integral en Power BI que consolida causas activas, facturación mensual, performance por abogado y alertas de vencimientos. Conectado a fuentes existentes del estudio mediante conectores de datos.',
      en: 'Comprehensive Power BI dashboard consolidating active cases, monthly billing, attorney performance, and deadline alerts. Connected to the firm\'s existing data sources via data connectors.',
    },
  },
  {
    id: '5',
    slug: 'crm-pipeline-analytics',
    comingSoon: true,
    image: '/images/project-soon-1.png',
    stack: ['Python', 'dbt', 'BigQuery', 'Looker Studio', 'HubSpot API'],
    title: {
      es: 'CRM Pipeline Analytics',
      en: 'CRM Pipeline Analytics',
    },
    summary: {
      es: 'Integración de HubSpot con BigQuery para analítica avanzada del funnel comercial.',
      en: 'HubSpot integration with BigQuery for advanced sales funnel analytics.',
    },
    problem: { es: '', en: '' },
    solution: { es: '', en: '' },
  },
  {
    id: '6',
    slug: 'ia-clasificador-leads',
    comingSoon: true,
    image: '/images/project-soon-2.png',
    stack: ['Python', 'OpenAI API', 'LangChain', 'BigQuery', 'Looker Studio'],
    title: {
      es: 'Clasificador de Leads con IA',
      en: 'AI Lead Classifier',
    },
    summary: {
      es: 'Clasificación y scoring automático de leads usando LLMs para priorizar el pipeline comercial.',
      en: 'Automatic lead classification and scoring using LLMs to prioritize the commercial pipeline.',
    },
    problem: { es: '', en: '' },
    solution: { es: '', en: '' },
  },
]
