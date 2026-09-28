import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-typescript")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/graphql-to-typescript"))
});
