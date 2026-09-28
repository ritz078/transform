import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/markdown-to-html")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/markdown-to-html"))
});
