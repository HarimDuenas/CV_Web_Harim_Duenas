import type { Project } from '../../data'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: Project
  /**
   * Home page preview: drops the highlight list and keeps the card to a
   * glance. The full account lives on /projects.
   */
  compact?: boolean
}

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="group relative rounded-2xl border border-ink-800 bg-ink-900/60 p-7 transition-colors duration-300 hover:border-gold-600/40 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-cream-50">
            {project.name}
          </h3>
          <p className="mt-1.5 text-cream-400">{project.tagline}</p>
        </div>

        {project.role ? (
          <span className="tracking-title shrink-0 rounded-full border border-gold-600/40 px-3 py-1 font-mono text-[0.65rem] uppercase text-gold-300">
            {project.role}
          </span>
        ) : null}
      </div>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>

      {compact ? null : (
        <ul className="mt-7 space-y-3 border-t border-ink-800 pt-6">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-cream-200">
              {/* A rule rather than a bullet: it lines up with the hairlines
                  used elsewhere and keeps the list quiet. */}
              <span
                aria-hidden="true"
                className="mt-3 h-px w-4 shrink-0 bg-gold-600/60"
              />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}
