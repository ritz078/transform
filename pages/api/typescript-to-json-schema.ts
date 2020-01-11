import { NextApiRequest, NextApiResponse } from "next";
import { SchemaGenerator } from "ts-json-schema-generator";
import * as ts from "typescript";
import { createFormatter } from "ts-json-schema-generator/dist/factory/formatter";
import { createParser } from "ts-json-schema-generator/dist/factory/parser";
import { createProgram } from "ts-json-schema-generator/dist/factory/program";
import { Config } from "ts-json-schema-generator/dist/src/Config";
import tempy from "tempy";
import fs from "fs";
import path from "path";

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const filePath = tempy.file({ extension: "ts" });
    fs.writeFileSync(filePath, req.body);
    const config: Config = {
      path: path.resolve(filePath),
      expose: "all",
      topRef: true,
      jsDoc: "extended",
      type: "*"
    };
    const program = createProgram(config);

    const generator: SchemaGenerator = new SchemaGenerator(
      program,
      createParser(program, config),
      // @ts-ignore
      createFormatter(config)
    );
    const schema = generator.createSchema("*");

    fs.unlink(filePath, () => {});
    res.status(200).send(schema);
  } catch (e) {
    res.status(500).send(e.message);
  }
};
