import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/cadence-to-go")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/cadence-to-go"))
});
