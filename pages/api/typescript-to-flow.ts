import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import { compiler, beautify } from "flowgen";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = compiler.compileDefinitionString(req.body);
    res.status(200).send(beautify(result));
  } catch (e) {
    console.log(e);

    res.status(500).send(e.message);
  }
};
