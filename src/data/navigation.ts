import type { NavRoute } from './types'

/**
 * The site map, in navigation order. Every `path` here must have a matching
 * <Route> in App.tsx — this array drives the header, so a path with no route
 * would render a link that leads nowhere.
 */
export const navRoutes: NavRoute[] = [
  {
    path: '/',
    label: 'Home',
    description: 'Full stack developer and Computer Systems Engineering student.',
  },
  {
    path: '/projects',
    label: 'Projects',
    description: 'Platforms, apps and tools built for universities and small businesses.',
  },
  {
    path: '/skills',
    label: 'Skills',
    description: 'The stack I build with, from front-end through database and deployment.',
  },
  {
    path: '/about',
    label: 'About',
    description: 'Education, languages and the strengths behind the technical work.',
  },
  {
    path: '/contact',
    label: 'Contact',
    description: 'Ways to reach me, and a copy of this CV as a PDF.',
  },
]
