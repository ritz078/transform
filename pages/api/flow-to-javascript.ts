import { NextApiRequest, NextApiResponse } from "next";
import { parse, print } from "recast";
import { transformFromAstSync, parseSync } from "@babel/core";
import transformFlow from "@babel/plugin-transform-flow-strip-types";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const ast = parse(req.body, {
      parser: require("recast/parsers/flow")
    });

    const options = {
      cloneInputAst: false, // recast stores metadata in AST nodes, so disable cloning will preserve the original code style
      code: false,
      ast: true,
      plugins: [transformFlow],
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
