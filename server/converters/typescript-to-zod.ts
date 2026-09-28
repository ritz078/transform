import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
import { tmpdir } from "node:os";
import { randomBytes } from "node:crypto";
import { join } from "node:path";

const { generate } = require("ts-to-zod");

export default async function handler(request: Request) {
  let body;
  try {
    body = await readBody(request);
  } catch (error) {
    return errorResponse(error);
  }
  const query = new URL(request.url).searchParams;
  const flag = (name: string) =>
    query.getAll(name).length === 1 && query.get(name) === "true";
  const filePath = join(tmpdir(), randomBytes(16).toString("hex") + ".ts");
  try {
    const generator = generate({
      sourceText: body,
      keepComments: flag("keepComments"),
      skipParseJSDoc: flag("skipParseJSDoc")
    });
    const schema = generator
      .getZodSchemasFile(filePath)
      .split(/\r?\n/)
      .slice(1)
      .join("\n");
    return Response.json({ schema, error: generator.errors[0] });
  } catch (error) {
    return Response.json({
      error: error instanceof Error ? error.message : String(error)
    });
  }
}
