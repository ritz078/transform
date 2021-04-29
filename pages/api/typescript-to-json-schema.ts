import { NextApiRequest, NextApiResponse } from "next";
import { Config } from "ts-json-schema-generator";
import { createGenerator } from "ts-json-schema-generator";
import os from "os";
import crypto from "crypto";
import path from "path";
import fs from "fs";

const tmpDir = os.tmpdir?.();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const programPath =
    path.join(tmpDir, crypto.randomBytes(16).toString("hex")) + ".ts";

  try {
    const program = req.body;
    fs.writeFileSync(programPath, program, {
      encoding: "utf-8"
    });
    const config: Config = {
      path: programPath,
      tsconfig: "./tsconfig.json",
      expose: "all",
      jsDoc: "extended",
      type: "*"
    };

    console.log({ config });
    // const schema = createGenerator(config).createSchema(config.type);
    const read = fs.readFileSync(programPath, { encoding: "utf-8" });
    res.status(200).send(
      JSON.stringify(
        {
          programPath,
          program,
          read,
          // schema,
          config,
          files: fs.readdirSync("."),
          tsconfig: fs.readFileSync("./tsconfig.json", { encoding: "utf-8" }),
          "next-env": fs.readFileSync("./next-env.d.ts", { encoding: "utf-8" }),
          typings: fs.readFileSync("./typings.d.ts", { encoding: "utf-8" })
        },
        null,
        2
      )
    );
  } catch (e) {
    res.status(500).send(e.message);
  }
  fs.unlinkSync(programPath);
};
