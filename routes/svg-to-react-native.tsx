import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/svg-to-react-native")({
  ssr: false,
  component: lazyRouteComponent(() => import("../pages/svg-to-react-native"))
});
