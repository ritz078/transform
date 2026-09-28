import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/yaml-to-toml")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/yaml-to-toml"))
});
