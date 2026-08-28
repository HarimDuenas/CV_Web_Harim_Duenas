import type { Profile } from './types'

export const profile: Profile = {
  firstName: 'Harim',
  lastName: 'Dueñas',
  fullName: 'Harim Jesús Enrique Dueñas Dávila',
  headline: 'Full Stack Developer',
  subheadline: 'Computer Systems Engineering student',
  location: 'Aguascalientes, Mexico',
  summary:
    'Seventh-semester Computer Systems Engineering student with hands-on full ' +
    'stack experience built on real projects for universities and small ' +
    'businesses. Focused on React, Node.js and modern software architecture, ' +
    'with agile leadership experience as SCRUM Master. Committed to delivering ' +
    'software that is functional, scalable and genuinely usable.',
}

/**
 * Called out on its own in the sidebar: the one role that says the most about
 * how Harim works, rather than which framework he happens to know.
 */
export const highlightedRole = {
  title: 'SCRUM Master',
  detail: 'Agile leadership on full stack projects',
} as const
