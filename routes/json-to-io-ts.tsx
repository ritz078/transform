import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-io-ts")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/json-to-io-ts"))
});
