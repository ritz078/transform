import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/yaml-to-json")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/yaml-to-json"))
});
