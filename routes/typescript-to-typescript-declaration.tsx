import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript-to-typescript-declaration")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/typescript-to-typescript-declaration")
  )
});
