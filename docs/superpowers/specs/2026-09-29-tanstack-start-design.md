# TanStack Start migration

Replace Next.js 10 and Webpack 4 with TanStack Start and Vite. Preserve converter URLs, navigation, settings, editor behavior, metadata, redirects, and the eight HTTP API contracts. Keep conversion algorithms and dependency versions stable unless compatibility requires a change.

Use file routes around the existing converter components. The root document renders route metadata; the interactive Evergreen application and Monaco remain client rendered to avoid coupling Evergreen's legacy style extraction to streaming SSR. Conversion workers use Vite worker imports. WASM and browser dependencies receive explicit build integration. Node-only converters remain server routes with Request/Response handlers.

Use React 18 and a current supported TypeScript/Node toolchain. Validate production builds, HTTP conversion success/error contracts, direct URL loading, browser conversion results, worker/WASM execution, navigation, and persisted settings. Keep Node hosting and Vercel support. No redesign, new converters, or deployment is included.
