import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/js-object-to-typescript")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/js-object-to-typescript")
  )
});
