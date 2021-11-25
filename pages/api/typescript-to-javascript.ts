import { NextApiRequest, NextApiResponse } from "next";
import { parse, print } from "recast";
import { transformFromAstSync, parseSync } from "@babel/core";
import transformTypescript from "@babel/plugin-transform-typescript";
import getBabelOptions from "recast/parsers/_babel_options";
import { parser } from "recast/parsers/babel";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const ast = parse(req.body, {
      parser: {
        parse: (source, options) => {
          const babelOptions = getBabelOptions(options);
          babelOptions.plugins.push("typescript", "jsx");
          return parser.parse(source, babelOptions);
        }
      }
    });

    const options = {
      cloneInputAst: false, // recast stores metadata in AST nodes, so disable cloning will preserve the original code style
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
