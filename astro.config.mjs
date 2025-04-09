// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://notquitethereyet.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'static',
  build: {
    format: 'file'
  },
  trailingSlash: 'ignore'
});