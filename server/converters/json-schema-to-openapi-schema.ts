import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
const toOpenApi = require("@openapi-contrib/json-schema-to-openapi-schema");

export default async function handler(request: Request) {
  try {
    const body = await readBody(request);
    const schema = await toOpenApi(body, { cloneSchema: true });
    return textResponse(JSON.stringify(schema, null, 2));
  } catch (error) {
    return errorResponse(error);
  }
}
