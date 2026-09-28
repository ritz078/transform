import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/jsonld-to-framed")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/jsonld-to-framed"))
});
