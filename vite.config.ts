import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from the root of https://harimduenascv.site/, so assets
  // resolve from '/'. If the custom domain is ever dropped and the site falls
  // back to https://harimduenas.github.io/CV_Web_Harim_Duenas/, this has to
  // become '/CV_Web_Harim_Duenas/' or every asset URL will 404.
  base: '/',
  plugins: [react(), tailwindcss()],
})
