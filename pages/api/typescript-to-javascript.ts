import { NextApiRequest, NextApiResponse } from "next";
import { parse, print } from "recast";
import { transformFromAstSync, parseSync } from "@babel/core";
import transformTypescript from "@babel/plugin-transform-typescript";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const ast = parse(req.body, {
      parser: {
        parse: source => {
          debugger;
          return parseSync(source, {
            presets: [
              "@babel/preset-react",
              "@babel/preset-env",
              "@babel/preset-typescript"
            ],
            filename: "filename.ts", // recast needs this
            parserOpts: {
              tokens: true // recast needs this
            }
          });
        }
      }
    });
    const options = {
      cloneInputAst: false,
      code: false,
      ast: true,
      plugins: [transformTypescript],
      configFile: false
    };
    const { ast: transformedAST } = transformFromAstSync(
      ast,
      req.body,
      options
    );
    const result = print(transformedAST).code;

    res.status(200).send(result);
  } catch (e) {
    console.log(e);

    res.status(500).send(e.message);
  }
};
