import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/typescript-to-json-schema";

export const Route = createFileRoute("/api/typescript-to-json-schema")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
