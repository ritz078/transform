import { NextApiRequest, NextApiResponse } from "next";
import { Config } from "ts-json-schema-generator";
import * as tsj from "ts-json-schema-generator";
import os from "os";
import crypto from "crypto";
import path from "path";
import fs from "fs";

const tmpDir = os.tmpdir?.();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const filePath =
    path.join(tmpDir, crypto.randomBytes(16).toString("hex")) + ".ts";
  try {
    fs.writeFileSync(filePath, req.body, {
      encoding: "utf-8"
    });
    const config: Config = {
      path: filePath,
      expose: "all",
      jsDoc: "extended",
      type: "*"
    };

    const schema = tsj.createGenerator(config).createSchema(config.type);
    console.log("before", { schema, config });
    res.status(200).send(JSON.stringify(schema, null, 2));
    console.log("after");
  } catch (e) {
    res.status(500).send(e.message);
  }
  fs.unlinkSync(filePath);
};
