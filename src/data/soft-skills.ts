import type { SoftSkill } from './types'

/**
 * Every entry names the work that backs it. A soft skill without evidence is
 * an adjective, and adjectives are worth nothing on a CV — the `evidence`
 * field is required by the type for exactly that reason.
 */
export const softSkills: SoftSkill[] = [
  {
    id: 'leadership',
    label: 'Leadership & teamwork',
    evidence:
      'Led Michis UAA as SCRUM Master, running sprint planning and ceremonies for the team.',
  },
  {
    id: 'problem-solving',
    label: 'Problem solving & analytical thinking',
    evidence:
      'Built payroll and severance calculation logic against real regulations, and designed the database schemas behind TARA.',
  },
  {
    id: 'self-learning',
    label: 'Self-directed learning & adaptability',
    evidence:
      'Shipped projects across React, Angular, Expo, Java and C#, picking up each stack as the project required it.',
  },
  {
    id: 'communication',
    label: 'Communication & organisation',
    evidence:
      'Coordinated sprint planning and worked directly with stakeholders at a small business and at the university.',
  },
]
