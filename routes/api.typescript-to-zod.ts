import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/typescript-to-zod";

export const Route = createFileRoute("/api/typescript-to-zod")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
