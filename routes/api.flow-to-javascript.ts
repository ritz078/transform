import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/flow-to-javascript";

export const Route = createFileRoute("/api/flow-to-javascript")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
