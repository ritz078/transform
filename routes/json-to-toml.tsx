import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-toml")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/json-to-toml"))
});
