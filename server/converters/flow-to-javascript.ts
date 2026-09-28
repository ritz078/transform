import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
const { parse, print } = require("recast");
const { transformFromAstSync } = require("@babel/core");
const transformFlow = require("@babel/plugin-transform-flow-strip-types");
const parser = require("recast/parsers/flow");

export default async function handler(request: Request) {
  try {
    const body = await readBody(request);
    const ast = parse(body, { parser });
    const { ast: transformedAST } = transformFromAstSync(ast, body, {
      // Recast stores formatting metadata on the original AST nodes.
      cloneInputAst: false,
      code: false,
      ast: true,
      plugins: [transformFlow],
      configFile: false
    });
    return textResponse(print(transformedAST).code);
  } catch (error) {
    return errorResponse(error);
  }
}
