'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useI18n, type Locale } from '@/lib/i18n'
import { projects, type Project } from '@/lib/projects'

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const { t, locale } = useI18n()
  const lang = locale as Locale

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-md bg-secondary hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
          aria-label={t.projects.close}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Project image */}
        <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-t-xl">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2
            id={`modal-title-${project.id}`}
            className="text-2xl font-bold text-foreground mb-2"
          >
            {project.title[lang]}
          </h2>
          <p className="text-foreground/70 mb-6">{project.summary[lang]}</p>

          {/* Problem */}
          {project.problem[lang] && (
            <div className="mb-6">
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                {t.projects.problem}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{project.problem[lang]}</p>
            </div>
          )}

          {/* Solution */}
          {project.solution[lang] && (
            <div className="mb-6">
              <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
                {t.projects.solution}
              </h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{project.solution[lang]}</p>
            </div>
          )}

          {/* Stack */}
          <div className="mb-8">
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-3">
              {t.projects.stack}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded bg-secondary border border-border text-foreground/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t.projects.viewRepo}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {t.projects.viewDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const { t, locale } = useI18n()
  const lang = locale as Locale

  return (
    <article
      className={`group relative bg-card border rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl ${
        project.comingSoon
          ? 'border-border opacity-70 cursor-default'
          : 'border-border hover:border-primary/40 hover:shadow-primary/10 cursor-pointer'
      }`}
      onClick={project.comingSoon ? undefined : onClick}
      role={project.comingSoon ? 'article' : 'button'}
      tabIndex={project.comingSoon ? undefined : 0}
      onKeyDown={(e) => {
        if (!project.comingSoon && (e.key === 'Enter' || e.key === ' ')) onClick()
      }}
      aria-label={project.comingSoon ? undefined : `${t.projects.viewDetail}: ${project.title[lang]}`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image — left column on md+ */}
        <div className="relative w-full md:w-72 lg:w-80 flex-shrink-0 h-52 md:h-auto overflow-hidden">
          <Image
            src={project.image}
            alt={project.title[lang]}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 320px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />

          {project.comingSoon && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
              <span className="font-mono text-xs text-primary border border-primary/40 bg-primary/10 px-3 py-1.5 rounded-full tracking-widest uppercase">
                {t.projects.comingSoon}
              </span>
            </div>
          )}
        </div>

        {/* Content — right column */}
        <div className="flex flex-col justify-between p-6 md:p-8 flex-1 min-w-0">
          <div>
            <h3 className="font-bold text-foreground mb-3 text-xl leading-snug">
              {project.title[lang]}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {project.summary[lang]}
            </p>

            {/* Stack chips */}
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded bg-secondary border border-border text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {!project.comingSoon && (
            <div className="flex items-center gap-1.5 text-xs text-primary font-mono mt-6 group-hover:gap-2.5 transition-all duration-200">
              <span>{t.projects.viewDetail}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useI18n()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-primary tracking-[0.2em] uppercase">02</span>
          <span className="flex-1 h-px bg-border max-w-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">{t.projects.title}</h2>
        </div>

        {/* Grid */}
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  )
}
