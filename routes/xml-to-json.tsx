import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/xml-to-json")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/xml-to-json"))
});
