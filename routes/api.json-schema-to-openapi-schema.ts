import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/json-schema-to-openapi-schema";

export const Route = createFileRoute("/api/json-schema-to-openapi-schema")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
