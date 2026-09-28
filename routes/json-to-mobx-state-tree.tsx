import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-mobx-state-tree")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/json-to-mobx-state-tree")
  )
});
