import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-flow-types")({
  beforeLoad: () => {
    throw redirect({ to: "/json-to-flow", statusCode: 308, search: true });
  }
});
