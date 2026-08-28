import type { Education, Language } from './types'

export const education: Education = {
  degree: 'B.Eng. in Computer Systems Engineering',
  institution: 'Universidad Autónoma de Aguascalientes',
  location: 'Aguascalientes, Mexico',
  status: '7th semester — in progress',
}

export const languages: Language[] = [
  {
    name: 'Spanish',
    level: 'Native',
  },
  {
    name: 'English',
    level: 'B1',
    detail: 'Conversational · technical reading',
  },
]
