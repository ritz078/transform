import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-schema-ast")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/graphql-to-schema-ast"))
});
