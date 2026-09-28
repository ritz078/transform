import { Buffer } from "node:buffer";
import { parse as parseQueryString } from "node:querystring";

class BodyParseError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.status = status;
  }
}

export async function readBody(request: Request): Promise<any> {
  const limit = 1024 * 1024;
  const tooLarge = () => new BodyParseError("Body exceeded 1mb limit", 413);
  if (Number(request.headers.get("content-length")) > limit) {
    await request.body?.cancel();
    throw tooLarge();
  }

  const reader = request.body?.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  if (reader) {
    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > limit) {
          await reader.cancel();
          throw tooLarge();
        }
        chunks.push(value);
      }
    } finally {
      reader.releaseLock();
    }
  }
  const body = Buffer.concat(chunks, size).toString("utf8");
  const contentType = request.headers
    .get("content-type")
    ?.split(";")[0]
    .trim();
  if (
    contentType === "application/json" ||
    contentType === "application/ld+json"
  ) {
    if (!body) return {};
    try {
      return JSON.parse(body);
    } catch {
      throw new BodyParseError("Invalid JSON");
    }
  }
  if (contentType === "application/x-www-form-urlencoded") {
    return parseQueryString(body);
  }
  return body;
}

export function textResponse(value: string) {
  return new Response(value, {
    headers: { "content-type": "text/html; charset=utf-8" }
  });
}

export function errorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : String(error);
  const status = error instanceof BodyParseError ? error.status : 500;
  return new Response(message, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      ...(status === 413 ? { connection: "close" } : {})
    }
  });
}
