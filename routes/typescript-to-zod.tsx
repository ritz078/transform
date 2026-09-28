import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/typescript-to-zod")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/typescript-to-zod"))
});
