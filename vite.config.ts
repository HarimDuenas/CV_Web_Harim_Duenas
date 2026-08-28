import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

/**
 * GitHub Pages serves static files only: a request for /projects looks for a
 * file that does not exist and returns its 404 page, so a refresh or a shared
 * deep link would break. Pages does serve `404.html` for unknown paths, so
 * shipping a copy of index.html under that name boots the app anyway and lets
 * the router resolve the URL on the client.
 */
function githubPagesSpaFallback(): Plugin {
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    closeBundle() {
      const dist = resolve(import.meta.dirname, 'dist')
      copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  // The site is served from the root of https://harimduenascv.site/, so assets
  // resolve from '/'. If the custom domain is ever dropped and the site falls
  // back to https://harimduenas.github.io/CV_Web_Harim_Duenas/, this has to
  // become '/CV_Web_Harim_Duenas/' or every asset URL will 404.
  base: '/',
  plugins: [react(), tailwindcss(), githubPagesSpaFallback()],
})
