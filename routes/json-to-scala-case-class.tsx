import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-scala-case-class")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/json-to-scala-case-class")
  )
});
