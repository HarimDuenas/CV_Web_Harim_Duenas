interface PageIntroProps {
  /** Small label above the title, e.g. the page's position in the site. */
  eyebrow?: string
  title: string
  description: string
}

/**
 * The opening block of every page except home: a large serif title over one
 * line of context. Uses the same rhythm as `Section` so a page reads as one
 * continuous document rather than a stack of unrelated blocks.
 */
export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="border-b border-ink-800/80 py-16 sm:py-20">
      {eyebrow ? (
        <p className="tracking-title mb-5 font-mono text-[0.7rem] uppercase text-gold-600">
          {eyebrow}
        </p>
      ) : null}

      <h1 className="font-display text-4xl font-semibold tracking-tight text-cream-50 sm:text-5xl">
        {title}
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream-400">{description}</p>
    </div>
  )
}
