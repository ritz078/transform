import { NextApiRequest, NextApiResponse } from "next";
import { convert } from "@khanacademy/flow-to-ts";
import * as ts from "typescript";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { value, declarationOnly, isTS } = req.body;

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
      jsx: ts.JsxEmit.React,
      skipDefaultLibCheck: true,
      skipLibCheck: true
    };

    const host = ts.createCompilerHost(options);

    host.getSourceFile = filename => {
      if (filename === "file.ts") {
        return ts.createSourceFile(filename, tsCode, undefined);
      }

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
