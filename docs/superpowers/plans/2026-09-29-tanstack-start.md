# TanStack Start Implementation Plan

> Execute in this session, with focused subagent implementation and review where independent work allows.

**Goal:** Run every existing converter on TanStack Start with preserved URLs and behavior.

**Architecture:** A Start root document owns metadata and a client-rendered Evergreen shell. File routes retain existing converter components, and server routes preserve the HTTP contracts. Vite builds browser workers and WASM.

**Tech Stack:** TanStack Start, React 18, Vite, TypeScript, Node.

**Spec:** ../specs/2026-09-29-tanstack-start-design.md

## Constraints

- Preserve all converter and API URLs and existing redirect destinations.
- Keep converter algorithms, inputs, settings, output formatting, and browser-local processing.
- Use a Node runtime for converters requiring temporary files.
- No production deployment.

## Tasks

- [x] Migrate the eight API handlers to Request/Response server functions and file routes. Add HTTP integration checks for text/JSON bodies, query flags, errors, and TypeScript temporary-file conversion.
- [x] Add Start/Vite configuration, root document, router, and converter file routes. Update navigation, metadata, client-only editor loading, scripts, types, and hosting. Replace the Tailwind getStaticProps file read with a build-time raw import.
- [x] Replace Webpack worker imports and require calls; configure browser dependencies and WASM. Verify SVG, GraphQL, Babel, PostCSS, Prettier, and WASM conversion paths in the browser.
- [x] Run type checks, production build, API checks, and browser conversion/navigation checks. Review the final diff, fix regressions, and document runtime/setup changes.

## Progress

- Created branch migrate/tanstack-start from clean master.
- Graph tools unavailable; source fallback inspected pages, API handlers, shell, hooks, worker code, and build configuration.
- Implementation authorized by user's request following feasibility assessment.

## Verification

- Frozen-lockfile offline install and all dependency patches passed.
- TypeScript check, production build, and 3 request-body unit tests passed.
- Production HTTP integration suite: 29 passed, including isolated deployment-artifact verification.
- Production browser suite: 76 passed, covering all 64 converter examples, representative edited inputs, navigation/persistence, metadata, redirects, and SSR 404.
- Development browser checks: 9 passed.
- Focused API and client/build reviews completed; findings fixed and rechecked.
- The migration is prepared on migrate/tanstack-start; production deployment is outside this plan.
