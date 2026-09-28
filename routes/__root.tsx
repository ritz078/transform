import React, { lazy, Suspense } from "react";
import {
  ClientOnly,
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
  useRouterState
} from "@tanstack/react-router";
import { activeRouteData } from "@utils/routes";
import stylesheet from "@styles/main.css?url";

const AppShell = lazy(() => import("@components/AppShell"));

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "google-site-verification",
        content: "bjJSOEahdert-7mwVScrwTTUVR3nSe0bEj5YjevUNn0"
      }
    ],
    links: [
      { rel: "stylesheet", href: stylesheet },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Material+Symbols+Outlined:wght@100..700&display=swap"
      },
      { rel: "icon", href: "/static/favicon.png", type: "image/png" },
      { rel: "manifest", href: "/static/site.webmanifest" }
    ]
  }),
  shellComponent: RootDocument,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: () => (
    <main>
      <h1>Something went wrong</h1>
      <a href="/">Back to Transform</a>
    </main>
  )
});

function RootComponent() {
  return (
    <ClientOnly fallback={<Outlet />}>
      <Suspense fallback={<Loading />}>
        <AppShell />
      </Suspense>
    </ClientOnly>
  );
}

function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <a href="/">Back to Transform</a>
    </main>
  );
}

function Loading() {
  return <main role="status">Loading Transform…</main>;
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: state => state.location.pathname });
  const route = activeRouteData(pathname);
  const title =
    pathname === "/"
      ? "transform.tools — Polyglot Code Transformer Workbench"
      : `${route?.searchTerm || "Transform"} — transform.tools`;
  const description =
    pathname === "/"
      ? "A polyglot web converter that's going to save you a lot of time."
      : route?.desc;

  return (
    <html lang="en">
      <head>
        <HeadContent />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`https://transform.tools${pathname}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://transform.tools/cover.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="https://transform.tools/cover.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="ritz078" />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
