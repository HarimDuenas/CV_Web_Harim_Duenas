import { Outlet } from 'react-router'
import { BackgroundDecor } from './BackgroundDecor'
import { ScrollReset } from './ScrollReset'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

/**
 * The frame every page renders inside. Declared once as a pathless parent
 * route so the header mounts a single time and survives navigation, instead of
 * being torn down and rebuilt on each page.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollReset />

      {/*
        First thing in the tab order, invisible until it takes focus. Without
        it a keyboard or screen reader user walks the whole header on every
        page before reaching the content — the same five links they just used
        to get here.
      */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-6 focus:z-60 focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-ink-950"
      >
        Skip to content
      </a>

      <BackgroundDecor />
      <SiteHeader />
      {/*
        tabIndex -1 makes the skip link actually work: without it the browser
        moves the reading position but not the focus, so the next Tab would
        land back at the top of the page.
      */}
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
