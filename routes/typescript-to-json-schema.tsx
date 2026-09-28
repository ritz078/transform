import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript-to-json-schema")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/typescript-to-json-schema")
  )
});
