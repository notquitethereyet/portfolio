# Portfolio with Boid Fish Simulation - Astro Version

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
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - Responsive design system
  - Custom color theming
  - JIT (Just-In-Time) compiler for optimized CSS

### Interactive Elements
- **Boid Simulation Algorithm** - Custom JavaScript implementation
  - Flocking behavior simulation (separation, alignment, cohesion)
  - Canvas-based rendering for performance
  - Responsive to viewport size
  - Configurable parameters for fish behavior

### Icons and UI
- [Font Awesome](https://fontawesome.com/) - Comprehensive icon library
- Responsive navigation and section layouts
- Animated UI elements

### Deployment
- GitHub Pages for hosting
- GitHub Actions for CI/CD pipeline
- Custom domain configuration

## Project Structure

- `src/` - Contains all Astro components and pages
  - `layouts/` - Layout components
  - `pages/` - Page components
  - `styles/` - Global CSS styles
- `public/` - Static assets
  - `js/` - JavaScript files including the boid simulation
  - `css/` - CSS files

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
