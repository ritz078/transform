import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
const html2pug = require("html2pug");

export default async function handler(request: Request) {
  try {
    const body = await readBody(request);
    const { value, settings } = body;
    return textResponse(html2pug(value, settings));
  } catch (error) {
    return errorResponse(error);
  }
}
