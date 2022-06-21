import { NextApiRequest, NextApiResponse } from "next";
import { generate } from "ts-to-zod";
import os from "os";
import crypto from "crypto";
import path from "path";

const tmpDir = os.tmpdir?.();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { query, body } = req;
  const { skipParseJSDoc, keepComments } = query;

  const filePath =
    path.join(tmpDir, crypto.randomBytes(16).toString("hex")) + ".ts";

  try {
    const schemaGenerator = generate({
      sourceText: body,
      keepComments: keepComments === "true",
      skipParseJSDoc: skipParseJSDoc === "true"
    });

    const schema = schemaGenerator.getZodSchemasFile(filePath);

    const formattedSchema = schema
      .split(/\r?\n/)
      .slice(1)
      .join("\n");

    res
      .status(200)
      .json({ schema: formattedSchema, error: schemaGenerator.errors[0] });
  } catch (e) {
    res.status(200).json({ error: e.message });
  }
};
