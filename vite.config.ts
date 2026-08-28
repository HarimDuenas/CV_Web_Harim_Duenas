import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // The site is served from https://harimduenas.github.io/CV_Web_Harim_Duenas/,
  // so every generated asset URL needs the repository name as a prefix.
  // Set this back to '/' if the site ever moves to a custom domain.
  base: '/CV_Web_Harim_Duenas/',
  plugins: [react(), tailwindcss()],
})
