import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-json-schema")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/json-to-json-schema"))
});
