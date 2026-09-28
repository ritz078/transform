import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/flow-to-typescript";

export const Route = createFileRoute("/api/flow-to-typescript")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
