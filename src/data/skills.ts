import type { SkillGroup } from './types'

/**
 * Ordered by how central each area is to the work Harim actually does, not
 * alphabetically. A recruiter reading only the first two rows should already
 * have the right picture.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Front-end',
    items: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Vite',
      'Tailwind CSS',
      'HTML5 / CSS3',
    ],
  },
  {
    id: 'backend',
    label: 'Back-end',
    items: ['Node.js', 'Express', 'Prisma ORM', 'REST APIs', 'WebSockets'],
  },
  {
    id: 'databases',
    label: 'Databases',
    items: ['SQL', 'PostgreSQL', 'Schema design', 'Complex queries'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: ['Expo', 'React Native', 'iOS / Android / Web'],
  },
  {
    id: 'languages',
    label: 'Other languages',
    items: ['C', 'C++', 'Java', 'C# (WinForms)'],
  },
  {
    id: 'devops',
    label: 'DevOps',
    items: ['Docker', 'Linux (Debian / Ubuntu)', 'Virtual machines', 'Git / GitHub'],
  },
  {
    id: 'practices',
    label: 'Practices',
    items: ['SCRUM', 'Software architecture', 'Agile ceremonies'],
  },
  {
    id: 'design',
    label: 'UI / UX',
    items: ['Figma', 'Visual asset design', 'UI ownership on most projects'],
  },
]
