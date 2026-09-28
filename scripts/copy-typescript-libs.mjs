import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync
} from "node:fs";
import { join } from "node:path";

const sourcePackage = "node_modules/typescript-converter";
const version = JSON.parse(
  readFileSync(join(sourcePackage, "package.json"), "utf8")
).version;
const output = process.env.VERCEL
  ? ".vercel/output/functions/__server.func"
  : ".output/server";
const target = join(
  output,
  "node_modules/.nf3",
  `typescript@${version}`,
  "lib"
);

if (!existsSync(target)) {
  throw new Error(`Traced TypeScript compiler not found at ${target}`);
}

mkdirSync(target, { recursive: true });
for (const name of readdirSync(join(sourcePackage, "lib"))) {
  if (name.startsWith("lib.") && name.endsWith(".d.ts")) {
    copyFileSync(join(sourcePackage, "lib", name), join(target, name));
  }
}
