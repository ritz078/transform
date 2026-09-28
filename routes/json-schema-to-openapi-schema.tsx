import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-schema-to-openapi-schema")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/json-schema-to-openapi-schema")
  )
});
