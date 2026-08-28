import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Icon } from './Icon'

interface ActionLinkProps {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
  /** Renders a plain anchor instead of a router link, for off-site targets. */
  external?: boolean
  withArrow?: boolean
}

const styles = {
  primary:
    'bg-gold-500 text-ink-950 hover:bg-gold-400 border border-transparent font-medium',
  secondary:
    'border border-ink-700 text-cream-200 hover:border-gold-600/50 hover:text-cream-50',
} as const

/**
 * A call to action. Internal targets go through the router so navigation stays
 * client-side; external ones fall back to a plain anchor with the `rel` guard
 * that `target="_blank"` requires.
 */
export function ActionLink({
  to,
  children,
  variant = 'secondary',
  external = false,
  withArrow = false,
}: ActionLinkProps) {
  const className = `focus-ring group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors duration-200 ${styles[variant]}`

  const content = (
    <>
      {children}
      {withArrow ? (
        <Icon
          name="arrow"
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      ) : null}
    </>
  )

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer noopener" className={className}>
        {content}
      </a>
    )
  }

  return (
    <Link to={to} className={className}>
      {content}
    </Link>
  )
}
