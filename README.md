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
src/
  data/          CV content, kept apart from the components that render it
  components/    UI, one file per section
  index.css      Design tokens (@theme) and base styles
  App.tsx        Page composition
```

Content lives in `src/data`, never inside a component. Adding a project or a new
skill means editing one plain data file — no JSX involved.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. Authentication uses OIDC, so the
repository stores no tokens or secrets.

The site is served from the root of a custom domain, which is why
`vite.config.ts` sets `base: '/'`. Without the custom domain the site would live
under `/CV_Web_Harim_Duenas/` and that value would have to change to match.
