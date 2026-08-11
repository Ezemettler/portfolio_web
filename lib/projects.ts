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
    slug: 'macroeconomia-argentina-pipeline',
    image: '/images/project-bcra.png',
    githubUrl: 'https://github.com/Ezemettler/macroeconomia_argentina_pipeline',
    demoUrl: 'https://datastudio.google.com/u/0/reporting/d7217684-498b-4d2a-826a-cb4fadabddc1/page/G2cvF',
    stack: ['Python', 'BigQuery', 'dbt', 'Looker Studio', 'Cloud Run', 'Cloud Scheduler'],
    title: {
      es: 'Pipeline Macroeconomía Argentina',
      en: 'Argentina Macroeconomic Data Pipeline',
    },
    summary: {
      es: 'Un pipeline automático que extrae a diario las principales variables económicas del Banco Central (dólar, inflación, reservas, tasas) y las deja listas para analizar en un dashboard público, sin cargar nada a mano.',
      en: "An automated pipeline that pulls Argentina's key economic indicators (FX rate, inflation, reserves, interest rates) from the Central Bank every day and turns them into a ready-to-explore public dashboard — no manual data entry.",
    },
    problem: {
      es: 'Las variables monetarias del BCRA (reservas, tipo de cambio, inflación, tasas, base monetaria) se publican a diario en una API pública, pero sin transformar, sin contexto histórico y sin ningún tipo de visualización lista para analizar series de tiempo.',
      en: "BCRA's monetary variables (reserves, FX rate, inflation, rates, monetary base) are published daily through a public API, but raw, without historical context, and without any visualization ready for time-series analysis.",
    },
    solution: {
      es: 'Pipeline ELT en Python que extrae 9 variables monetarias desde la API del BCRA con manejo de paginación y reintentos, las carga de forma incremental en BigQuery y las transforma con dbt: limpieza, cálculo de cierres mensuales y una tabla pivot enriquecida con contexto político (gobiernos, eventos económicos). Corre diariamente en Cloud Run + Cloud Scheduler y alimenta un dashboard en Looker Studio para exploración de series de tiempo.',
      en: 'Python ELT pipeline that extracts 9 monetary variables from the BCRA API with pagination and retry handling, loads them incrementally into BigQuery, and transforms them with dbt: cleaning, monthly close calculations, and a pivoted table enriched with political context (governments, key economic events). Runs daily on Cloud Run + Cloud Scheduler and feeds a Looker Studio dashboard for time-series exploration.',
    },
  },
  {
    id: '2',
    slug: 'farmacias-de-turno',
    image: '/images/project-farmacias.png',
    githubUrl: 'https://github.com/Ezemettler/v0-farmacias-de-turno-app',
    demoUrl: 'https://farmaciasdeturno.vercel.app',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Web Scraping', 'GitHub Actions', 'Vercel'],
    title: {
      es: 'Farmacias de Turno',
      en: 'On-Call Pharmacies Finder',
    },
    summary: {
      es: 'Un sitio que muestra, ciudad por ciudad, qué farmacia está de turno en este momento, con la información extraída y actualizada automáticamente todos los días desde las fuentes oficiales.',
      en: 'A site that shows, city by city, which pharmacy is on duty right now — with data scraped and refreshed automatically every day from official sources.',
    },
    problem: {
      es: 'Buscar una farmacia de turno hoy significa toparse con información desactualizada, repartida en PDFs o escondida en la web de un colegio de farmacéuticos difícil de navegar, y casi nunca queda claro cuál está de turno ahora mismo, no solo "hoy".',
      en: "Finding an on-call pharmacy today usually means outdated information scattered across PDFs or buried in a hard-to-navigate pharmacists' association website — and it's rarely clear which one is on duty right now, not just \"today.\"",
    },
    solution: {
      es: 'Un scraper en TypeScript por ciudad (7 ciudades, 6 automatizadas) visita cada fuente oficial, normaliza los turnos y los guarda en Supabase con upsert idempotente, dejando un historial de cada corrida para auditar errores. Los scrapers corren dos veces al día vía GitHub Actions (con migración en curso a Cloud Run + Cloud Scheduler), y el frontend en Next.js calcula en tiempo real qué farmacia está de turno según la hora de Argentina, con deploy continuo en Vercel.',
      en: 'A per-city TypeScript scraper (7 cities, 6 automated) hits each official source, normalizes the shifts, and upserts them into Supabase, logging every run for auditing. Scrapers run twice a day via GitHub Actions (with an in-progress migration to Cloud Run + Cloud Scheduler), while the Next.js frontend computes in real time which pharmacy is on duty based on Argentina time, continuously deployed on Vercel.',
    },
  },
  {
    id: '3',
    slug: 'relevamiento-propiedades-moron',
    image: '/images/project-propiedades.png',
    githubUrl: 'https://github.com/Ezemettler/relevamiento_casas',
    demoUrl: 'https://relevamientocasas.streamlit.app/',
    stack: ['Python', 'Streamlit', 'PostgreSQL', 'SQLAlchemy', 'GitHub Actions'],
    title: {
      es: 'Relevamiento de Propiedades — Morón y alrededores',
      en: 'Property Market Tracker — Morón, Argentina',
    },
    summary: {
      es: 'Una app que releva semanalmente el mercado inmobiliario de Morón y alrededores, guarda el historial de precios de cada propiedad (algo que ningún portal conserva) y calcula un precio de referencia por zona para negociar con datos, no a ciegas.',
      en: "An app that tracks the Morón, Argentina real estate market weekly, keeps a price history no listing site preserves, and calculates a per-area reference price to negotiate with data instead of guesswork.",
    },
    problem: {
      es: 'El mercado inmobiliario no tiene memoria pública: los portales muestran el precio de hoy, pero nadie registra que una propiedad lleva ocho meses publicada o que ya bajó de precio tres veces, información clave para negociar que se pierde si no se guarda en el momento.',
      en: "The real estate market has no public memory: listing sites show today's price, but nobody records that a property has been listed for eight months or has already had three price cuts — key negotiating information that's lost if it isn't captured as it happens.",
    },
    solution: {
      es: 'Job semanal en Python que releva cuatro inmobiliarias de la zona y +Hogares del Banco Nación, normaliza precio, superficie y ubicación, y detecta cambios contra el historial guardado en PostgreSQL. Una app en Streamlit permite explorar el listado, ver la evolución de precio de cada propiedad y cargar evaluaciones subjetivas de las visitas (luz, humedad, entorno) para compararlas después. Con esos datos calcula precio/m² de referencia por zona y "meses de inventario" para estimar cuánto margen hay para negociar.',
      en: "A weekly Python job scrapes four local real estate agencies plus Banco Nación's +Hogares listings, normalizes price, size, and location, and detects changes against the price history stored in PostgreSQL. A Streamlit app lets you browse listings, track each property's price history, and log subjective visit notes (light, humidity, surroundings) for later comparison. From that data it calculates a reference price per m² by area and \"months of inventory\" to gauge negotiating room.",
    },
  },
]
