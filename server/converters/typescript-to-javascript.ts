import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
const { parse, print } = require("recast");
const { transformFromAstSync } = require("@babel/core");
const transformTypescript = require("@babel/plugin-transform-typescript");
const getBabelOptions = require("recast/parsers/_babel_options").default;
const { parser } = require("recast/parsers/babel");

export default async function handler(request: Request) {
  try {
    const body = await readBody(request);
    const ast = parse(body, {
      parser: {
        parse(source: string, options: unknown) {
          const babelOptions = getBabelOptions(options);
          babelOptions.plugins.push("typescript", "jsx");
          return parser.parse(source, babelOptions);
        }
      }
    });
    const { ast: transformedAST } = transformFromAstSync(ast, body, {
      // Recast stores formatting metadata on the original AST nodes.
      cloneInputAst: false,
      code: false,
      ast: true,
      plugins: [transformTypescript],
      configFile: false
    });
    return textResponse(print(transformedAST).code);
  } catch (error) {
    return errorResponse(error);
  }
}
