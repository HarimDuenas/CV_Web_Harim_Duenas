import { Outlet } from 'react-router'
import { BackgroundDecor } from './BackgroundDecor'
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
      <BackgroundDecor />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
