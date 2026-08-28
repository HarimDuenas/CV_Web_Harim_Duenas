import { useEffect } from 'react'
import { useLocation } from 'react-router'

/**
 * Sends the window back to the top whenever the route changes.
 *
 * The browser only restores scroll on a full document load; a client-side
 * navigation leaves the viewport exactly where it was, so arriving at a page
 * halfway down it is the default behaviour without this.
 *
 * `<ScrollRestoration>` from react-router is not an option here: it reads the
 * data router context, and this app mounts the declarative `<BrowserRouter>`,
 * so it would throw on render. Adopting a data router for this alone would be a
 * far larger change than the six lines below.
 *
 * `behavior: 'instant'` deliberately overrides the smooth scrolling declared on
 * `html` — that is there for in-page anchors, and animating the jump between
 * two different pages would show the reader a scroll they never asked for.
 */
export function ScrollReset() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return null
}
