'use client'

import { useI18n } from '@/lib/i18n'

const stack = {
  bi: ['Power BI', 'DAX', 'Power Query', 'Looker Studio', 'Excel'],
  programming: ['Python', 'Pandas', 'SQL'],
  cloud: ['GCP', 'BigQuery', 'Cloud Run', 'Docker', 'GitHub Actions', 'Git', 'SQL Server'],
  integration: ['HubSpot API', 'Botmaker API', 'Google Ads', 'Meta Ads', 'Claude', 'Claude Code'],
}

export default function About() {
  const { t } = useI18n()

  const categoryKeys = [
    { key: 'bi', label: t.about.categories.bi, items: stack.bi },
    { key: 'programming', label: t.about.categories.programming, items: stack.programming },
    { key: 'cloud', label: t.about.categories.cloud, items: stack.cloud },
    { key: 'integration', label: t.about.categories.integration, items: stack.integration },
  ]

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">01</span>
          <span className="flex-1 h-px bg-border max-w-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.about.title}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Bio */}
          <div>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-pretty">
              {t.about.bio}
            </p>
          </div>

          {/* Stack */}
          <div>
            <h3 className="font-mono text-sm text-primary uppercase tracking-widest mb-8">
              {t.about.stackTitle}
            </h3>
            <div className="flex flex-col gap-6">
              {categoryKeys.map(({ key, label, items }) => (
                <div key={key}>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3 font-semibold">
                    {label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded text-xs font-mono bg-secondary border border-border text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors duration-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
