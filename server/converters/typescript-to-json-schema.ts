import { createRequire } from "node:module";
import { readBody, textResponse, errorResponse } from "./http";

const require = createRequire(import.meta.url);
import { tmpdir } from "node:os";
import { randomBytes } from "node:crypto";
import { join } from "node:path";
import { writeFileSync, rmSync } from "node:fs";

const tsj = require("ts-json-schema-generator");

export default async function handler(request: Request) {
  const filePath = join(tmpdir(), randomBytes(16).toString("hex") + ".ts");
  const configPath = filePath + ".json";
  try {
    const body = await readBody(request);
    writeFileSync(filePath, body, { encoding: "utf-8" });
    // Keep the converter's older compiler isolated from the application's ambient types.
    writeFileSync(
      configPath,
      JSON.stringify({
        compilerOptions: {
          noEmit: true,
          emitDecoratorMetadata: true,
          experimentalDecorators: true,
          target: "es5",
          module: "commonjs",
          strictNullChecks: false,
          types: []
        },
        files: [filePath]
      })
    );
    const config = {
      path: filePath,
      tsconfig: configPath,
      expose: "all",
      jsDoc: "extended",
      type: "*"
    };
    const schema = tsj.createGenerator(config).createSchema(config.type);
    return textResponse(JSON.stringify(schema, null, 2));
  } catch (error) {
    return errorResponse(error);
  } finally {
    rmSync(filePath, { force: true });
    rmSync(configPath, { force: true });
  }
}
