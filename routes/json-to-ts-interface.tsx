import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/json-to-ts-interface")({
  beforeLoad: () => {
    throw redirect({
      to: "/json-to-typescript",
      statusCode: 308,
      search: true
    });
  }
});
