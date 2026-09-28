import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/typescript-to-javascript";

export const Route = createFileRoute("/api/typescript-to-javascript")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
