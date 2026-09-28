import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/flow-to-typescript-declaration")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/flow-to-typescript-declaration")
  )
});
