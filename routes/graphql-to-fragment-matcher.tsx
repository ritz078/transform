import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-fragment-matcher")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/graphql-to-fragment-matcher")
  )
});
