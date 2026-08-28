/**
 * Sets the browser tab title for the page that renders it.
 *
 * React 19 hoists a `<title>` rendered anywhere in the tree up into `<head>`,
 * so this needs neither an effect nor a helmet library. Every page declares its
 * own instead of deriving the text from `navRoutes`, because a tab title and a
 * navigation label are not the same copy: the nav says "Projects", the tab has
 * room to say what the page is.
 *
 * The site name stays in the ASCII spelling used by the metadata in
 * `index.html`, so the tab, the canonical title and the Open Graph card all
 * read the same.
 */
const siteName = 'Harim Duenas'

interface PageTitleProps {
  /** Leads the title — it is what a reader scanning pinned tabs actually sees. */
  page: string
}

export function PageTitle({ page }: PageTitleProps) {
  return <title>{`${page} — ${siteName}`}</title>
}
