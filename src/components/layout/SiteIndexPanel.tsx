import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router'
import { navRoutes } from '../../data'
import { Icon } from '../ui/Icon'

interface SiteIndexPanelProps {
  open: boolean
  onClose: () => void
}

/**
 * The small-screen navigation, built as a numbered index rather than the usual
 * stack of menu links: each route keeps the number, the display face and the
 * one-line description already written in `navRoutes`, so the panel reads like
 * the contents page of the printed CV instead of an app drawer.
 *
 * It stays mounted and is marked `inert` while closed. Toggling `inert` instead
 * of unmounting keeps the slide-out animation — an unmounted panel has nothing
 * left to animate — while still removing the links from the tab order and from
 * the accessibility tree, which `hidden`-less CSS alone would not do.
 *
 * Rendered through a portal because the header that owns it carries
 * `backdrop-blur`, and a backdrop filter makes an element the containing block
 * for its `fixed` descendants: left inside the header the panel would size
 * itself against that one bar instead of against the viewport.
 */
export function SiteIndexPanel({ open, onClose }: SiteIndexPanelProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const { pathname } = useLocation()

  // Closing on a location change covers the browser's back and forward
  // buttons; the links close the panel themselves on click, which also handles
  // tapping the route that is already open (no location change to react to).
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    // The page behind the panel must not scroll under the finger while the
    // panel is open; the previous value is restored so this never fights with
    // anything else that might be managing overflow.
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  // Focus moves into the panel on open and returns to whatever opened it on
  // close, so keyboard users are never left focused on an element that has
  // slid off screen.
  useEffect(() => {
    if (!open) return

    const previouslyFocused = document.activeElement as HTMLElement | null
    closeButtonRef.current?.focus()

    return () => previouslyFocused?.focus()
  }, [open])

  return createPortal(
    <div className="md:hidden">
      <button
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={onClose}
        className={`fixed inset-0 z-40 cursor-default bg-ink-950/70 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      <div
        id="site-index"
        role="dialog"
        aria-modal="true"
        aria-label="Site index"
        inert={!open}
        className={`fixed inset-y-0 right-0 z-50 flex w-[min(22rem,86vw)] flex-col border-l border-ink-800 bg-ink-900 shadow-2xl shadow-ink-950/60 transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end px-6 pt-5">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close the site index"
            className="-mr-2 rounded-full p-2 text-cream-400 transition-colors hover:text-cream-50"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Site index" className="flex-1 overflow-y-auto px-6 pb-8">
          <span aria-hidden="true" className="block h-px w-10 bg-gold-500/70" />

          <ul className="mt-7">
            {navRoutes.map((route, index) => (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  end={route.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex gap-4 border-l-2 py-3.5 pl-4 transition-colors ${
                      isActive ? 'border-gold-500' : 'border-transparent'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`mt-2 font-mono text-xs ${
                          isActive ? 'text-gold-400' : 'text-cream-600'
                        }`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="min-w-0">
                        <span
                          className={`block font-display text-xl leading-tight ${
                            isActive ? 'text-gold-300' : 'text-cream-50'
                          }`}
                        >
                          {route.label}
                        </span>
                        <span className="mt-1.5 block text-sm leading-relaxed text-cream-600">
                          {route.description}
                        </span>
                      </span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <p className="tracking-title border-t border-ink-800 px-6 py-5 font-mono text-xs text-cream-600">
          HARIMDUENASCV.SITE
        </p>
      </div>
    </div>,
    document.body,
  )
}
