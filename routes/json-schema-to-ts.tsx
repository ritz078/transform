import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/json-schema-to-ts")({
  beforeLoad: () => {
    throw redirect({
      to: "/json-schema-to-typescript",
      statusCode: 308,
      search: true
    });
  }
});
