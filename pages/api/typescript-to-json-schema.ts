import { NextApiRequest, NextApiResponse } from "next";
import { Config } from "ts-json-schema-generator/dist/src/Config";
import tempy from "tempy";
import * as tsj from "ts-json-schema-generator";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const filePath = tempy.writeSync(req.body, { extension: "ts" });
    const config: Config = {
      path: filePath,
      expose: "all",
      jsDoc: "extended",
      type: "*"
    };

    const schema = tsj.createGenerator(config).createSchema(config.type);
    res.status(200).send(JSON.stringify(schema, null, 2));
  } catch (e) {
    res.status(500).send(e.message);
  }
};
