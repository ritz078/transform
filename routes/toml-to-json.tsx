import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/toml-to-json")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/toml-to-json"))
});
