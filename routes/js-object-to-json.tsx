import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/js-object-to-json")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/js-object-to-json"))
});
