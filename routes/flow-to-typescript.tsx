import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/flow-to-typescript")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/flow-to-typescript"))
});
