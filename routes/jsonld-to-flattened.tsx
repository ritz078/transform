import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/jsonld-to-flattened")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/jsonld-to-flattened"))
});
