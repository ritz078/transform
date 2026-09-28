import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/toml-to-yaml")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/toml-to-yaml"))
});
