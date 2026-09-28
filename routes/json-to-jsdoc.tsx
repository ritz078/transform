import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-jsdoc")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/json-to-jsdoc"))
});
