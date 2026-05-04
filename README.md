# Vue Starter 🚀

[![CI](https://github.com/eigdoyr/vue-starter/actions/workflows/ci.yml/badge.svg)](https://github.com/eigdoyr/vue-starter/actions/workflows/ci.yml)

Vue 3 + TypeScript + Vite + SCSS starter template.

## What's Included

- **Vue 3** with Composition API and `<script setup>`
- **TypeScript** with strict mode and path aliases
- **Vite** with optimized config
- **Vue Router** with Home + 404 routes
- **Vitest** with @vue/test-utils for testing
- **SCSS** with design token system (variables, mixins, animations, utilities)
- **ESLint + Prettier** pre-configured
- **Husky + lint-staged** for pre-commit hooks
- **EditorConfig** for consistent formatting across editors
- **GitHub Actions CI** for lint, test, and build
- **Reusable composables** (`useMediaQuery`, `useClickOutside`)
- **Generic components** — Navbar with mobile menu, Footer

## Getting Started

### Use the template

Click **Use this template** on GitHub, or clone:

```bash
git clone https://github.com/eigdoyr/vue-starter.git my-project
cd my-project
rm -rf .git
git init
```

### Install and run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

## Testing

Tests use Vitest with @vue/test-utils.

- `npm run test` — watch mode for development
- `npm run test:run` — single run for CI

Test files live alongside the code they test in `__tests__/` folders, named `*.spec.ts` or `*.test.ts`.

## Customization Checklist

After cloning, update or replace:

- [ ] `package.json` — name, description, author
- [ ] `index.html` — title, description, theme color
- [ ] `public/favicon.svg` — your brand mark
- [ ] `src/styles/_variables.scss` — colors, fonts, spacing tokens
- [ ] `src/components/Navbar.vue` — brand and links
- [ ] `src/components/Footer.vue` — brand, copyright, links
- [ ] `src/views/HomeView.vue` — actual home page content
- [ ] `src/components/__tests__/Footer.spec.ts` — replace with real tests
- [ ] `.env.example` — your actual env vars
- [ ] `README.md` — your project's README

## Project Structure

```text
src/
├── assets/          # Images and static files
├── components/      # Reusable UI building blocks
├── composables/     # Reusable logic (useMediaQuery, useClickOutside)
├── data/            # Static content and type definitions
├── router/          # Vue Router config
├── sections/        # Page sections
├── styles/          # SCSS design tokens and globals
│   ├── _variables.scss
│   ├── _mixins.scss
│   ├── _animations.scss
│   ├── _reset.scss
│   ├── _typography.scss
│   ├── _utilities.scss
│   └── main.scss
├── utils/           # Pure utility functions
└── views/           # Page-level components (routed)
```

## Conventions

### Commit Messages

Format: `<type>: <subject>`

Types:
- `feat` — new feature
- `fix` — bug fix
- `style` — formatting, no logic change
- `refactor` — code restructuring
- `docs` — documentation
- `chore` — tooling, dependencies

Example: `feat: add hero section`

### Component Structure

Order within `.vue` files:
1. `<template>`
2. `<script setup lang="ts">`
3. `<style lang="scss" scoped>`

### File Naming

- Components: `PascalCase.vue`
- Composables: `useCamelCase.ts`
- Utilities: `camelCase.ts`
- Styles: `_kebab-case.scss`

### Path Aliases

- `@/` → `src/`
- `@components/` → `src/components/`
- `@composables/` → `src/composables/`
- `@views/` → `src/views/`
- `@router/` → `src/router/`
- `@sections/` → `src/sections/`
- `@styles/` → `src/styles/`
- `@assets/` → `src/assets/`
- `@data/` → `src/data/`
- `@utils/` → `src/utils/`

## License

MIT

## Created By

[Ryodgie Barnatia](https://www.ryodgie.com)
