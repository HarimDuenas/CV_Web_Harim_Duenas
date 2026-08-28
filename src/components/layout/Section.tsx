import type { ReactNode } from 'react'

interface SectionProps {
  /** Must match the matching entry in `navSections`; anchors depend on it. */
  id: string
  /** Two-digit ordinal shown before the title, e.g. "02". */
  index: string
  title: string
  children: ReactNode
}

/**
 * Every top-level block of the page. Owns the heading treatment — numbered,
 * letter-spaced and trailed by a rule — so the rhythm is identical throughout
 * and no section can drift on its own.
 */
export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      // scroll-mt keeps the heading clear of the sticky nav when jumped to.
      className="scroll-mt-24 border-t border-ink-800/80 py-20 sm:py-28"
    >
      <header className="mb-12 flex items-baseline gap-4">
        <span className="font-mono text-sm text-gold-600" aria-hidden="true">
          {index}
        </span>
        <h2
          id={`${id}-heading`}
          className="tracking-title text-xs font-semibold uppercase text-cream-400"
        >
          {title}
        </h2>
        <span className="h-px flex-1 bg-ink-800" aria-hidden="true" />
      </header>
      {children}
    </section>
  )
}
