import type { NavSection } from './types'

/**
 * Each `id` has to match the `id` attribute of its <section> in the page, since
 * that is what the anchor links and the scroll-spy both rely on.
 */
export const navSections: NavSection[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'strengths', label: 'Strengths' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]
