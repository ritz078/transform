import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-components")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/graphql-to-components"))
});
