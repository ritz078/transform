import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-flow")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/graphql-to-flow"))
});
