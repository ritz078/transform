import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-mysql")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/json-to-mysql"))
});
