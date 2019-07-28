import { NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import { compiler } from "flowgen";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const result = compiler.compileDefinitionString(req.body);
    res.status(200).send(result);
  } catch (e) {
    res.status(500);
  }
};
