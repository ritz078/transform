import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
const { compiler, beautify } = require("flowgen");

export default async function handler(request: Request) {
  try {
    const body = await readBody(request);
    return textResponse(beautify(compiler.compileDefinitionString(body)));
  } catch (error) {
    return errorResponse(error);
  }
}
