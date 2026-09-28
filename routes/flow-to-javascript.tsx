import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/flow-to-javascript")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/flow-to-javascript"))
});
