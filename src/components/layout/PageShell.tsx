import type { ReactNode } from 'react'

interface PageShellProps {
  children: ReactNode
}

/**
 * Horizontal frame shared by every page: one max width, one set of gutters.
 * Centralising it means a change to the measure applies everywhere at once,
 * and no page can quietly end up wider than its neighbours.
 *
 * The 64rem cap is a readability limit, not an aesthetic one — prose past
 * roughly 75 characters per line gets measurably harder to track.
 */
export function PageShell({ children }: PageShellProps) {
  return <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">{children}</div>
}
