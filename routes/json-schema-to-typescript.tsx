import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-schema-to-typescript")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/json-schema-to-typescript")
  )
});
