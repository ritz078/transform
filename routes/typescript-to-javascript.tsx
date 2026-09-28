import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript-to-javascript")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/typescript-to-javascript")
  )
});
