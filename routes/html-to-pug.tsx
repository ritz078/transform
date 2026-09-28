import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/html-to-pug")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/html-to-pug"))
});
