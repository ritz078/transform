import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-java")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/graphql-to-java"))
});
