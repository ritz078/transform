import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/typescript-to-flow";

export const Route = createFileRoute("/api/typescript-to-flow")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
