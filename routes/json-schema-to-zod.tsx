import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/json-schema-to-zod")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/json-schema-to-zod"))
});
