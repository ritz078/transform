import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/html-to-jsx")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/html-to-jsx"))
});
