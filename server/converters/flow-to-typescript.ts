import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
const { convert } = require("@khanacademy/flow-to-ts");
const ts = require("typescript-converter") as typeof import("typescript-converter");

export default async function handler(request: Request) {
  try {
    const body = await readBody(request);
    const { value, declarationOnly, isTS } = body;
    const tsCode = isTS ? value : convert(value);
    if (!declarationOnly) return textResponse(tsCode);

    let output = "";
    const options = {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      jsx: ts.JsxEmit.React,
      skipDefaultLibCheck: true,
      skipLibCheck: true
    };
    const host = ts.createCompilerHost(options);
    host.getSourceFile = filename =>
      ts.createSourceFile(
        filename,
        filename === "file.ts" ? tsCode : "",
        undefined!
      );
    host.writeFile = (_name, text) => {
      output = text;
    };
    ts.createProgram(["file.ts"], options, host).emit();
    return textResponse(output);
  } catch (error) {
    return errorResponse(error);
  }
}
