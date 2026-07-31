import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'Ezequiel Mettler — Analytics Engineer',
  description:
    'Analytics Engineer especializado en IA y datos aplicados a inteligencia comercial. Construcción de pipelines end-to-end y dashboards para acelerar decisiones de negocio.',
  keywords: ['Analytics Engineer', 'Data Analyst', 'BI', 'Python', 'SQL', 'BigQuery', 'Power BI', 'Looker Studio'],
  authors: [{ name: 'Ezequiel Mettler' }],
  openGraph: {
    title: 'Ezequiel Mettler — Analytics Engineer',
    description: 'IA & Datos Aplicados a Inteligencia Comercial',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
