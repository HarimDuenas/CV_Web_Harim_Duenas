import { highlightedRole, profile } from '../../data'
import { ActionLink } from '../ui/ActionLink'

/**
 * The first screen. Everything here answers one question — who is this and
 * what do they do — before the visitor has to scroll or decide anything.
 */
export function Hero() {
  return (
    <section className="py-20 sm:py-28">
      <p className="tracking-title mb-8 flex items-center gap-3 font-mono text-[0.7rem] uppercase text-gold-600">
        <span aria-hidden="true" className="h-px w-8 bg-gold-600/60" />
        {profile.location}
      </p>

      {/* The name is split so it breaks predictably instead of wherever the
          viewport happens to land. */}
      <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-cream-50 sm:text-7xl">
        Harim
        <br />
        <span className="text-gold-400">Dueñas</span>
      </h1>

      <p className="mt-7 font-display text-xl text-cream-200 sm:text-2xl">
        {profile.headline}
        <span aria-hidden="true" className="mx-3 text-ink-600">
          ·
        </span>
        <span className="text-cream-400">{highlightedRole.title}</span>
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream-400">
        {profile.summary}
      </p>

      <div className="mt-11 flex flex-wrap gap-3">
        <ActionLink to="/projects" variant="primary" withArrow>
          View projects
        </ActionLink>
        <ActionLink to="/contact">Get in touch</ActionLink>
      </div>
    </section>
  )
}
