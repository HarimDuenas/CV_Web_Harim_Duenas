import type { ReactNode } from 'react'

interface TagProps {
  children: ReactNode
  /**
   * `quiet` drops the gold for long lists where a wall of accent colour would
   * fight with the surrounding text — the skills table, mainly.
   */
  variant?: 'accent' | 'quiet'
}

/** A single technology or keyword, set in mono so it reads as a term of art. */
export function Tag({ children, variant = 'accent' }: TagProps) {
  const tone =
    variant === 'accent'
      ? 'border-gold-600/35 bg-gold-500/8 text-gold-300'
      : 'border-ink-700 bg-ink-850 text-cream-400'

  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full border px-3 py-1 font-mono text-[0.7rem] tracking-wide ${tone}`}
    >
      {children}
    </span>
  )
}
