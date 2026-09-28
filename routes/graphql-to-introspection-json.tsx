import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-introspection-json")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/graphql-to-introspection-json")
  )
});
