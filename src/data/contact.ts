import type { ContactMethod } from './types'

/**
 * Order matters: this is the order the sidebar renders. Location first (cheap
 * context), then the two direct channels, then the links worth clicking.
 */
export const contactMethods: ContactMethod[] = [
  {
    id: 'location',
    label: 'Location',
    value: 'Aguascalientes, Mexico',
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+52 496 110 0093',
    // tel: needs the number stripped of spaces to be dialable on mobile.
    href: 'tel:+524961100093',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'harimenriqueduenas@gmail.com',
    href: 'mailto:harimenriqueduenas@gmail.com',
  },
  {
    id: 'email-alt',
    label: 'Email',
    value: 'harimenriqueduenas@outlook.com',
    href: 'mailto:harimenriqueduenas@outlook.com',
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/HarimDuenas',
    href: 'https://github.com/HarimDuenas',
    display: 'github.com/HarimDuenas',
  },
  {
    id: 'website',
    label: 'Web CV',
    value: 'harimduenascv.site',
    href: 'https://harimduenascv.site',
    display: 'harimduenascv.site',
  },
]
