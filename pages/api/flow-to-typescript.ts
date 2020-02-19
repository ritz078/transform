import { NextApiRequest, NextApiResponse } from "next";
import convert from "@khanacademy/flow-to-ts";
import * as ts from "typescript";
import * as fs from "fs";
import * as path from "path";
import getConfig from "next/config";
const { serverRuntimeConfig } = getConfig();

const libSource = fs
  .readFileSync(
    path.join(
      serverRuntimeConfig.PROJECT_ROOT,
      "node_modules",
      "typescript",
      "lib",
      "lib.d.ts"
    )
  )
  .toString();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { value, declarationOnly, isTS } = JSON.parse(req.body);

    const tsCode = isTS ? value : convert(value);

    if (!declarationOnly) {
      res.status(200).send(tsCode);
      return;
    }

    let output = "";

    const options = {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.Preserve,
      skipDefaultLibCheck: true,
      skipLibCheck: true
    };

    const host = ts.createCompilerHost(options);

    host.getSourceFile = filename => {
      if (filename === "file.ts") {
        return ts.createSourceFile(filename, tsCode, undefined);
      }
      if (filename === "lib.d.ts")
        return ts.createSourceFile(filename, libSource, undefined);

      return ts.createSourceFile(filename, "", undefined);
    };

    host.writeFile = (_name, text) => {
      output = text;
    };

    const program = ts.createProgram(["file.ts"], options, host);
    program.emit();

    res.status(200).send(output);
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};
