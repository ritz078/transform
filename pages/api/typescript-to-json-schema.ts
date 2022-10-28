import { NextApiRequest, NextApiResponse } from "next";
import os from "os";
import crypto from "crypto";
import path from "path";
import fs from "fs";
import util from "util";
import { exec } from "child_process";

const _exec = util.promisify(exec);

const tmpDir = os.tmpdir?.();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const filePath =
    path.join(tmpDir, crypto.randomBytes(16).toString("hex")) + ".ts";
  try {
    fs.writeFileSync(filePath, req.body, {
      encoding: "utf-8"
    });

    const stdout = await _exec(`typescript-json-schema ${filePath} Root`);
    res.status(200).send(stdout.stdout);
  } catch (e) {
    res.status(500).send(e.message);
  }
  fs.unlinkSync(filePath);
};
