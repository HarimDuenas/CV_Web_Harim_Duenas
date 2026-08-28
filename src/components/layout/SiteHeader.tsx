import { useCallback, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navRoutes } from '../../data'
import { Icon } from '../ui/Icon'
import { SiteIndexPanel } from './SiteIndexPanel'

/**
 * Sticky top bar. NavLink resolves the active route itself, so nothing here
 * has to read the URL or keep state — the `isActive` flag it hands the
 * className callback is the single source of truth for the highlight.
 *
 * Below `md` the five links do not fit on one line, so they are replaced by a
 * button that opens {@link SiteIndexPanel}. The open state lives here rather
 * than in the panel because the button and the panel both need it.
 */
export function SiteHeader() {
  const [indexOpen, setIndexOpen] = useState(false)

  // Stable identity: the panel closes itself from several effects, and a new
  // function on every render would restart them.
  const closeIndex = useCallback(() => setIndexOpen(false), [])

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/80 bg-ink-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 py-4 sm:px-10">
        <Link
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-cream-50 transition-colors hover:text-gold-400"
        >
          HD
        </Link>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navRoutes.map((route) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  // Without `end`, "/" would count as active on every page,
                  // since every path starts with a slash.
                  end={route.path === '/'}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-1.5 text-sm transition-colors ${
                      isActive
                        ? 'bg-gold-500/10 text-gold-300'
                        : 'text-cream-400 hover:text-cream-50'
                    }`
                  }
                >
                  {route.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setIndexOpen(true)}
          aria-label="Open the site index"
          aria-expanded={indexOpen}
          aria-controls="site-index"
          className="-mr-2 rounded-full p-2 text-cream-400 transition-colors hover:text-cream-50 md:hidden"
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>
      </div>

      <SiteIndexPanel open={indexOpen} onClose={closeIndex} />
    </header>
  )
}
