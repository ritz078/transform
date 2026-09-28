import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/css-to-js")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/css-to-js"))
});
