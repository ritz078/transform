import { createFileRoute } from "@tanstack/react-router";
import handler from "../server/converters/html-to-pug";

export const Route = createFileRoute("/api/html-to-pug")({
  server: { handlers: { ANY: ({ request }) => handler(request) } }
});
