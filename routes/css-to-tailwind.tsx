import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/css-to-tailwind")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/css-to-tailwind"))
});
