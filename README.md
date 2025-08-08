# Portfolio – Astro + Liquid Glass UI

This is a portfolio website featuring a beautiful interactive boid fish simulation background, ported to the Astro framework.

## Features

- Interactive boid fish simulation background
- Responsive portfolio layout
- Tailwind CSS for styling
- Custom color theme based on Catppuccin Mocha
- Optimized for performance with Astro

## Technologies Used

### Core Framework
- [Astro](https://astro.build/) - The web framework for content-driven websites
  - Zero-JS by default with optional hydration
  - Component-based architecture
  - Built-in optimization for images and assets

### Styling
- [Tailwind CSS 4](https://tailwindcss.com/) via `@tailwindcss/vite`
  - Tokens and theme via CSS `@theme` in `src/styles/global.css`
  - Minimal `tailwind.config.js` (can be removed if not needed)
  - Dracula color palette mapped to CSS variables

### Interactive Elements
- **Boid Simulation Algorithm** - Custom JavaScript implementation
  - Flocking behavior simulation (separation, alignment, cohesion)
  - Canvas-based rendering for performance
  - Responsive to viewport size
  - Configurable parameters for fish behavior

### Icons and UI
- [Font Awesome](https://fontawesome.com/)
- Liquid-glass UI components:
  - Cards: layered `glass-container` with `glass-filter` (backdrop blur), `glass-overlay` (translucent gradient), `glass-specular` (inner rim), `glass-content` (content layer), subtle hover sheen, and press tilt
  - Buttons: `btn-wrap` + `btn-shadow` + `btn-fancy` with outline sweep and text-shadow animation

### Deployment
- GitHub Pages for hosting
- GitHub Actions for CI/CD pipeline
- Custom domain configuration

See the stack and best practices in `docs/tech-stack` (internal notes).

## Project Structure

- `src/` - Contains all Astro components and pages
  - `layouts/` - Layout components
  - `pages/` - Page components
  - `styles/` - Global CSS styles
- `public/` - Static assets
  - `js/` - JavaScript files including the boid simulation
  - `css/` - (Removed) legacy CSS; styles are consolidated in `src/styles/global.css`

For a detailed, up-to-date directory map and file purposes, see `docs/project-structure` (internal notes).

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```
3. Run the development server:
   ```
   pnpm dev
   ```
4. Build for production:
   ```
   pnpm build
   ```

## Porting Notes

This project was ported from a vanilla HTML/CSS/JS implementation to Astro. The main changes include:

1. Creating an Astro component structure
2. Moving static assets to the public directory
3. Adapting the JavaScript to work with Astro's component lifecycle
4. Maintaining the same visual design and interactive elements

## UI Updates

- Card titles follow the Dracula accent color:
  - `src/components/ui/SkillCard.astro`: `text-accent` + `text-shadow-md`.
  - `src/components/sections/Projects.astro`: `text-accent` + `text-shadow-md`.
- Buttons upgraded to animated glass style matching the attached behavior:
  - New styles in `src/styles/global.css`: `btn-wrap`, `btn-shadow`, `btn-fancy`.
  - Updated usage in `src/components/sections/Hero.astro` and `src/pages/404.astro`.

- Cards standardized to layered liquid-glass:
  - `glass-container` with filter/overlay/specular/content layers
  - Subtle hover sheen (masked to upper portion for readability) and click tilt
  - Applied to Skills, Projects, and Contact cards

## Architecture and Build

- Astro 5 static site (`output: 'static'`, `build.format: 'file'`)
- Vite plugin: `@tailwindcss/vite` (Tailwind 4). The public CSS (`public/css/styles.css`) has been removed; all styles live in `src/styles/global.css`.
- The `manualChunks` Rollup config was removed because assets under `public/` are not bundled.
- Canvas-based boid simulation loaded once at runtime via `BaseLayout` script tag; script lives in `public/js/boid-simulation.js` and is initialized safely idempotently.

## Redundancy audit (safe cleanups)

- Removed legacy stylesheet `public/css/styles.css` and its reference (now all styles in `src/styles/global.css`).
- Removed `manualChunks` for public assets from `astro.config.mjs` since files under `public/` are not part of the bundle.
- `tailwind.config.js` is minimal and unused by Tailwind v4; keep or delete. Tokens are defined with `@theme` in CSS.
- Confirmed no remaining references to deprecated classes (`btn-glass`) or removed CSS path.

## Development

Install and run:

```
pnpm install
pnpm dev
```

Build:

```
pnpm build
pnpm preview
```

## Project Overview

This portfolio showcases projects and skills with a modern liquid-glass aesthetic over a dynamic boid background. The UI uses CSS-only layered glass effects for cards and animated pills for buttons, tuned for readability on a dark Dracula palette. The codebase favors minimal configuration (Tailwind 4 tokens in CSS, thin Astro config) and avoids unnecessary bundling of public assets.
