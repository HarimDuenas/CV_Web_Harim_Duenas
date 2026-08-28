import type { Project, SideProject } from './types'

/**
 * Ordered by how much they show, not chronologically. TARA and Michis UAA come
 * first because they cover the widest surface: front-end, back-end, database
 * and, in the second case, team leadership.
 */
export const projects: Project[] = [
  {
    id: 'tara',
    name: 'TARA',
    tagline: 'University mental health platform',
    stack: ['React + Vite', 'Node.js', 'Prisma ORM', 'SQL'],
    highlights: [
      'Built multiple front-end wellbeing modules, including interactive mini-games with React + Vite.',
      'Designed the database schema for user credits and purchases using Prisma ORM.',
      'Developed Node.js back-end services connecting the credits modules to the checkout gateway.',
      'Delivered accessible tools that help university students identify and manage emotions while they wait for professional therapy.',
    ],
  },
  {
    id: 'michis-uaa',
    name: 'Michis UAA',
    tagline: 'Feline colony monitoring',
    role: 'SCRUM Master',
    stack: ['React + Vite', 'Expo', 'React Native', 'Node.js'],
    highlights: [
      'Built CRUDs for the web admin panel and sighting registration in the mobile app, covering the full stack.',
      'Led the team as SCRUM Master: sprint management, ceremonies and delivery of value increments.',
      'Centralised the registry of the university cat colonies, tracking sterilisation status and zones.',
    ],
  },
  {
    id: 'exzootic',
    name: 'Exzootic',
    tagline: 'E-commerce platform',
    stack: ['JavaScript', 'Node.js', 'Third-party APIs'],
    highlights: [
      'Full stack development with vanilla JavaScript on the front-end and Node.js on the back-end.',
      'Integrated multiple external APIs for transactional email and the complete purchase flow.',
      'Designed an intuitive interface with particular care for the checkout process and browsing experience.',
    ],
  },
  {
    id: 'payroll-simulator',
    name: 'Payroll & Severance Simulator',
    tagline: 'Built for a small business',
    stack: ['Business logic', 'Desktop interface'],
    highlights: [
      'Implemented the complete calculation logic for payroll and severance under applicable regulations.',
      'Built a clean graphical interface for non-technical HR staff, replacing manual spreadsheet work.',
    ],
  },
]

/** Smaller pieces worth a line each — enough to show range, not detail. */
export const sideProjects: SideProject[] = [
  {
    id: 'guess-who',
    name: 'Guess Who Multiplayer',
    description:
      'Real-time gameplay over WebSockets in Java, with a custom graphical interface.',
  },
  {
    id: 'blindswap',
    name: 'BlindSwap',
    description: 'Anonymous exchange platform with a dynamic, intuitive flow.',
  },
]
