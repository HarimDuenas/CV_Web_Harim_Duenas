/**
 * Single entry point for CV content, so components import from `../data`
 * rather than reaching into individual files. Moving or splitting a data file
 * then stays invisible to everything that consumes it.
 */
export * from './types'

export { contactMethods } from './contact'
export { education, languages } from './education'
export { navSections } from './navigation'
export { highlightedRole, profile } from './profile'
export { projects, sideProjects } from './projects'
export { skillGroups } from './skills'
export { softSkills } from './soft-skills'
