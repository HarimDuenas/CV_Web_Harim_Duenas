import { Link } from 'react-router'
import { contactMethods, navRoutes, profile } from '../../data'
import { Icon } from '../ui/Icon'

const github = contactMethods.find((method) => method.id === 'github')

/**
 * Closes every page. Repeats the navigation because a visitor who has read to
 * the bottom should not have to scroll back up to go anywhere.
 */
export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ink-800/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between sm:px-10">
        <div>
          <p className="font-display text-lg text-cream-50">{profile.fullName}</p>
          <p className="mt-1.5 text-sm text-cream-600">
            {profile.headline} · {profile.location}
          </p>

          {github ? (
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-5 inline-flex items-center gap-2 text-sm text-cream-400 transition-colors hover:text-gold-400"
            >
              <Icon name="github" className="h-4 w-4" />
              {github.display}
            </a>
          ) : null}
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navRoutes.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className="text-sm text-cream-400 transition-colors hover:text-cream-50"
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-ink-800/60">
        <p className="mx-auto max-w-5xl px-6 py-6 font-mono text-xs text-cream-600 sm:px-10">
          Built with React, Vite and Tailwind CSS. Deployed from GitHub Actions.
        </p>
      </div>
    </footer>
  )
}
