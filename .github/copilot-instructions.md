# Copilot instructions for this repository

Purpose: Help AI coding agents make focused, correct changes in this Next.js portfolio.

- **Quick start (dev/test/build):**
  - `npm run dev` — run Next.js dev server
  - `npm run build` — build for production
  - `npm run start` — start built app
  - `npm run test` / `npm run test:watch` / `npm run test:coverage` — Jest
  - `npm run lint` — ESLint

- **Big picture**
  - This is a Next.js (App Router) TypeScript project. Primary app code lives in [src/app](src/app) and global utilities live in [src/lib](src/lib).
  - Layout and font setup: see [src/app/layout.tsx](src/app/layout.tsx#L1-L40) (uses `next/font`).
  - Component organization: reusable UI under [src/app/components](src/app/components). Layout components are barrel-exported from [src/app/components/layout/index.ts](src/app/components/layout/index.ts#L1-L10).

- **Data & conventions**
  - Static content and navigation live in `src/lib` (examples: [src/lib/content.ts](src/lib/content.ts#L1-L40), [src/lib/navigation.ts](src/lib/navigation.ts#L1-L40)).
  - Project uses the `@/` path alias (see [tsconfig.json](tsconfig.json#L1-L60)). Use `@/` when importing internal modules.
  - Components are typically default exports and directories expose barrel `index.ts` files. Import from the folder path, not deep file paths when possible.

- **Testing & mocks**
  - Jest + `ts-jest` + `jest-environment-jsdom` are configured; tests are under [src/tests](src/tests).
  - Tests commonly mock internal modules via the `@/` alias (example: [src/tests/app/page.test.tsx](src/tests/app/page.test.tsx#L1-L40)). Follow that pattern when creating mocks.

- **Styling & runtime libs**
  - Tailwind CSS is used; global styles in [src/app/globals.css](src/app/globals.css).
  - Framer Motion and Lucide are used for animations/icons—keep bundle impact in mind when adding heavy dependencies.

- **Code generation rules for AI**
  - Preserve TypeScript types and strict mode — this repo sets `strict: true` in `tsconfig.json`.
  - Keep changes minimal and localized. Run `npm run test` after functional changes and update unit tests if behavior changes.
  - When adding components, include a barrel export (`index.ts`) and default export matching existing conventions.
  - Prefer using `src/lib` constants for content/navigation rather than duplicating strings across components.

- **Files to inspect for context before edits**
  - [src/app/layout.tsx](src/app/layout.tsx#L1-L40)
  - [src/app/page.tsx](src/app/page.tsx#L1-L60)
  - [src/app/components/pages/MainPage.tsx](src/app/components/pages/MainPage.tsx#L1-L200)
  - [src/lib/content.ts](src/lib/content.ts#L1-L40)
  - [src/tests/app/page.test.tsx](src/tests/app/page.test.tsx#L1-L40)

If anything here is unclear or you need more examples (component shape, props, or test fixtures), ask and I'll add small, concrete samples.
