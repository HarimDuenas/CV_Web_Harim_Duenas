# CV Web — Harim Dueñas

Personal résumé site for **Harim Jesús Enrique Dueñas Dávila**, Computer Systems
Engineering student and full stack developer.

**Live at [harimduenascv.site](https://harimduenascv.site)**

## Stack

| Layer | Choice |
| --- | --- |
| UI | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 (CSS-first configuration) |
| Language | TypeScript |
| Linting | oxlint |
| Hosting | GitHub Pages, deployed by GitHub Actions |

## Running it locally

```bash
npm install
npm run dev
```

The dev server prints a local URL — open it and edits reload instantly.

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload |
| `npm run build` | Type-check, then emit the production bundle to `dist/` |
| `npm run preview` | Serve `dist/` locally, to check the real build |
| `npm run lint` | Run oxlint over the source |

Node 22 is expected; the version is pinned in `.nvmrc` and CI reads it from
there, so local and CI builds always agree.

## Layout

```
public/          Static files copied verbatim into the build
  CNAME          Custom domain claim read by GitHub Pages
  favicon.svg    HD monogram
  *.pdf          The résumé, linked from the contact page
src/
  data/          CV content, kept apart from the components that render it
  components/
    layout/      The frame: header, footer, page shell, background
    home/        Hero, used only by the landing page
    projects/    Project card, shared by the home and projects pages
    ui/          Primitives with no domain knowledge: Tag, Icon, ActionLink
  pages/         One file per route, composed from the above
  index.css      Design tokens (@theme) and base styles
  App.tsx        Route table
  main.tsx       Entry point: mounts BrowserRouter around App
```

Content lives in `src/data`, never inside a component. Adding a project or a new
skill means editing one plain data file — no JSX involved.

## Pages

Five routes, declared in `App.tsx` and driven by `src/data/navigation.ts` — that
array feeds the header, the footer and the small-screen site index, so a route
added there shows up in all three at once. Every path in it needs a matching
`<Route>`, or the site would advertise a link that leads nowhere.

| Route | Page | What it holds |
| --- | --- | --- |
| `/` | `HomePage` | Hero, two featured projects, closing call to action |
| `/projects` | `ProjectsPage` | Every project, plus the shorter side work |
| `/skills` | `SkillsPage` | Technical groups and soft skills |
| `/about` | `AboutPage` | Summary, education, languages |
| `/contact` | `ContactPage` | Contact methods and the PDF download |

They all render inside `RootLayout`, a pathless parent route, so the header and
footer mount once and survive navigation instead of being rebuilt per page.
`RootLayout` also mounts `ScrollReset`, which returns the viewport to the top on
every route change — a client-side navigation leaves the scroll position exactly
where it was otherwise. Each page sets its own tab title through `PageTitle`.

Below the `md` breakpoint the header links are replaced by a button that opens
`SiteIndexPanel`: the same five routes as a numbered index, each with the
description written in `navigation.ts`.

Unknown paths fall through to a catch-all route that renders the home page.
GitHub Pages serves `404.html` for anything it does not recognise, and
`vite.config.ts` emits that file as a copy of the app, so a deep link like
`/projects` still boots the router instead of dead-ending.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. Authentication uses OIDC, so the
repository stores no tokens or secrets.

The site is served from the root of a custom domain, which is why
`vite.config.ts` sets `base: '/'`. Without the custom domain the site would live
under `/CV_Web_Harim_Duenas/` and that value would have to change to match.
