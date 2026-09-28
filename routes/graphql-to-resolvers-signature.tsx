import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/graphql-to-resolvers-signature")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/graphql-to-resolvers-signature")
  )
});
