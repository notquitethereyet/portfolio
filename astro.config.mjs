// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://notquitethereyet.github.io',
  base: '/portfolio',
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'boid-simulation': ['./public/js/boid-simulation.js']
          }
        }
      }
    }
  },
  output: 'static',
  build: {
    format: 'file'
  },
  trailingSlash: 'ignore'
});