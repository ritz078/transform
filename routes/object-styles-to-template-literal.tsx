import { createFileRoute, lazyRouteComponent } from "@tanstack/react-router";

export const Route = createFileRoute("/object-styles-to-template-literal")({
  ssr: false,
  component: lazyRouteComponent(() =>
    import("../pages/object-styles-to-template-literal")
  )
});
