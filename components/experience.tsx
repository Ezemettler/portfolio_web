'use client'

import { useI18n } from '@/lib/i18n'

export default function Experience() {
  const { t } = useI18n()

  const jobs = [
    {
      company: 'MaterCell',
      role: t.experience.dataAnalyst,
      period: `Sep 2024 — ${t.experience.present}`,
      description: t.experience.matercellDesc,
      tags: ['Python', 'SQL', 'Power BI', 'Google Cloud', 'Looker Studio'],
      current: true,
    },
    {
      company: 'Bios Deco',
      role: t.experience.founder,
      period: '2020 — 2023',
      description: t.experience.biosDesc,
      tags: ['Business Analytics', 'Marketing', 'E-commerce', 'Meta Ads'],
      current: false,
    },
  ]

  return (
    <section id="experience" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">02</span>
          <span className="flex-1 h-px bg-border max-w-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.experience.title}</h2>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

          <div className="flex flex-col gap-10">
            {jobs.map((job) => (
              <div key={job.company} className="relative pl-12 md:pl-20">
                {/* Timeline dot */}
                <div
                  className={`absolute left-3 md:left-[1.875rem] top-1.5 w-2.5 h-2.5 rounded-full border-2 transition-colors ${
                    job.current
                      ? 'bg-primary border-primary shadow-lg shadow-primary/40'
                      : 'bg-background border-border'
                  }`}
                  aria-hidden="true"
                />

                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{job.company}</h3>
                      <p className="text-primary font-mono text-sm mt-1">{job.role}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span className="flex items-center gap-1.5 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                          {t.experience.present}
                        </span>
                      )}
                      <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-mono rounded bg-secondary border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
