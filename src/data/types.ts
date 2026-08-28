/**
 * Shape of every piece of CV content.
 *
 * The data files in this folder are the single source of truth for the site:
 * components read from them and never hardcode copy. Updating the CV should
 * mean editing a plain object here, never touching JSX.
 */

/** A labelled way to get in touch. */
export interface ContactMethod {
  id: string
  label: string
  value: string
  /** Absolute URL or `mailto:` / `tel:` scheme. Omitted when not clickable. */
  href?: string
  /** Shown as-is on screen; `value` may be a longer or raw form. */
  display?: string
}

/** Identity and elevator pitch. */
export interface Profile {
  firstName: string
  lastName: string
  fullName: string
  /** One-line role, sits directly under the name. */
  headline: string
  /** Secondary line: what is being studied. */
  subheadline: string
  location: string
  /** Two or three sentences. Kept short on purpose — recruiters skim. */
  summary: string
}

export interface Education {
  degree: string
  institution: string
  location: string
  /** e.g. "7th semester — in progress" */
  status: string
}

export interface Language {
  name: string
  /** CEFR level or "Native". */
  level: string
  /** Optional qualifier, e.g. "Conversational · technical reading". */
  detail?: string
}

/** One row of the technical skills table. */
export interface SkillGroup {
  id: string
  label: string
  items: string[]
}

export interface Project {
  id: string
  name: string
  /** What it is, in a handful of words. */
  tagline: string
  /** Only set when the role is worth calling out, e.g. "SCRUM Master". */
  role?: string
  stack: string[]
  /** Concrete contributions. Each one starts with a verb. */
  highlights: string[]
}

/** A smaller project: name and one line, no bullet list. */
export interface SideProject {
  id: string
  name: string
  description: string
}

/**
 * A soft skill together with the experience that backs it. The evidence is
 * mandatory by design — an unjustified soft skill is noise on a CV.
 */
export interface SoftSkill {
  id: string
  label: string
  evidence: string
}

/** An entry in the site navigation. `path` must match a declared route. */
export interface NavRoute {
  path: string
  label: string
  /** One line describing the page, reused as its intro and in metadata. */
  description: string
}
