import type { ReactNode } from 'react'

export type IconName =
  | 'location'
  | 'phone'
  | 'email'
  | 'github'
  | 'website'
  | 'arrow'
  | 'menu'
  | 'close'

interface IconProps {
  name: IconName
  className?: string
}

/**
 * The handful of icons the site needs, inlined rather than pulled from a
 * library. An icon package would ship a runtime and a tree-shaking problem for
 * eight glyphs; these cost nothing and render at any size.
 *
 * All but GitHub are stroked at 1.5 to sit alongside the text weight without
 * shouting. GitHub is the official mark, which is a filled shape.
 */
const glyphs: Record<IconName, ReactNode> = {
  location: (
    <>
      <path d="M12 21s-6.5-5.1-6.5-9.9a6.5 6.5 0 1 1 13 0C18.5 15.9 12 21 12 21Z" />
      <circle cx="12" cy="11" r="2.4" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h2.7l1.4 3.4-1.7 1.3a11 11 0 0 0 5.2 5.2l1.3-1.7 3.4 1.4v2.7a1.8 1.8 0 0 1-2 1.8A15.5 15.5 0 0 1 4.4 5.5a1.8 1.8 0 0 1 1.8-2Z" />
  ),
  email: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m3.8 7 7.1 5.2a2 2 0 0 0 2.2 0L20.2 7" />
    </>
  ),
  website: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.4 3.3 5.4 3.3 8.5s-1.1 6.1-3.3 8.5c-2.2-2.4-3.3-5.4-3.3-8.5S9.8 5.9 12 3.5Z" />
    </>
  ),
  arrow: <path d="M5 12h13m-5.5-5.5L18 12l-5.5 5.5" />,
  // Deliberately uneven rules rather than the usual three equal bars: it reads
  // as a table of contents, which is what the panel behind it actually is.
  menu: <path d="M4 8h16M4 16h9" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54l-.02-1.92c-3.12.68-3.78-1.5-3.78-1.5-.5-1.3-1.25-1.64-1.25-1.64-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.5-.28-5.12-1.25-5.12-5.55 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.7 10.7 0 0 1 5.63 0c2.15-1.45 3.1-1.15 3.1-1.15.61 1.55.23 2.7.11 2.98.72.78 1.16 1.78 1.16 3 0 4.3-2.63 5.26-5.14 5.54.4.35.76 1.03.76 2.08l-.01 3.08c0 .3.2.65.77.54A11.2 11.2 0 0 0 12 .8Z"
    />
  ),
}

export function Icon({ name, className = 'h-4 w-4' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {glyphs[name]}
    </svg>
  )
}
