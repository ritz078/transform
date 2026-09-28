import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/svg-to-jsx")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 308, search: true });
  }
});
