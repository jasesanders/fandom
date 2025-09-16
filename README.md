# Fandom UI Sandbox

A Vite + React + Tailwind playground for experimenting with UI ideas before they ship. The repository is intentionally lightweight so teammates can explore patterns, iterate on tokens, and share snippets quickly.

## Getting started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Start the dev server**
   ```bash
   npm run dev
   ```
   The app opens to the playground so you can tinker with example components right away.

For the best experience use the active LTS version of Node.js (v18+) and enable your editor's ESLint + TypeScript integrations.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Runs Vite's development server with hot module reloading. |
| `npm run build` | Type-checks the project and outputs a production build to `dist/`. |
| `npm run lint` | Lints all source files using the shared ESLint configuration. |
| `npm run preview` | Serves the production build locally for smoke testing. |

## Playground overview

- The primary sandbox lives in [`src/pages/Playground.tsx`](src/pages/Playground.tsx).
- It renders a grid of buttons, cards, and typography samples styled with Tailwind utility classes.
- Update this page as you experiment with new design tokens, interaction states, or documentation snippets.

Use the navigation in the header to jump between the overview hero and the playground. When you are ready to promote a component into the product, lift the relevant patterns into the feature's module.
