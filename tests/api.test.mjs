import assert from "node:assert/strict";
import test from "node:test";

const base = process.env.TEST_BASE_URL || "http://localhost:3000";

async function post(endpoint, body, contentType = "application/json") {
  return fetch(new URL(`/api/${endpoint}`, base), {
    method: "POST",
    headers: { "content-type": contentType },
    body: contentType === "application/json" ? JSON.stringify(body) : body
  });
}

const fixtures = [
  [
    "flow-to-javascript",
    "const count: number = 1;",
    "const count = 1;",
    "text/plain"
  ],
  [
    "flow-to-typescript",
    {
      value: "type User = { name: string };",
      isTS: false,
      declarationOnly: false
    },
    "type User = {\n  name: string;\n};"
  ],
  [
    "flow-to-typescript",
    {
      value: "export const count: number = 1;",
      isTS: true,
      declarationOnly: true
    },
    "export declare const count: number;\n"
  ],
  [
    "html-to-pug",
    { value: "<div><span>Hello</span></div>", settings: {} },
    "html\n  head\n  body\n    div\n      span Hello"
  ],
  [
    "json-schema-to-openapi-schema",
    { type: ["string", "null"] },
    '{\n  "type": "string",\n  "nullable": true\n}'
  ],
  [
    "typescript-to-flow",
    "export interface User { name: string; }",
    "export interface User {\n  name: string;\n}\n",
    "text/plain"
  ],
  [
    "typescript-to-javascript",
    "const count: number = 1;",
    "const count = 1;",
    "text/plain"
  ]
];

for (const [endpoint, body, expected, contentType] of fixtures) {
  test(`${endpoint} converts ${JSON.stringify(body)}`, async () => {
    const response = await post(endpoint, body, contentType);
    assert.equal(response.status, 200);
    assert.equal(await response.text(), expected);
  });
}

test("typescript-to-json-schema returns definitions", async () => {
  const response = await post(
    "typescript-to-json-schema",
    "export interface User { name: string; }",
    "text/plain"
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    $schema: "http://json-schema.org/draft-07/schema#",
    $ref: "#/definitions/User",
    definitions: {
      User: {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
        additionalProperties: false
      }
    }
  });
});

const zodSource =
  "export interface User {\n/** @minLength 3 */\nname: string;\n}";
for (const [query, property] of [
  ["", "    name: z.string().min(3)"],
  [
    "?keepComments=true",
    "    /** @minLength 3 */\n    name: z.string().min(3)"
  ],
  ["?skipParseJSDoc=true", "    name: z.string()"],
  [
    "?keepComments=true&skipParseJSDoc=true",
    "    /** @minLength 3 */\n    name: z.string()"
  ],
  ["?skipParseJSDoc=false", "    name: z.string().min(3)"],
  ["?skipParseJSDoc=true&skipParseJSDoc=true", "    name: z.string().min(3)"]
]) {
  test(`typescript-to-zod respects flags ${query}`, async () => {
    const response = await post(
      `typescript-to-zod${query}`,
      zodSource,
      "text/plain"
    );
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), {
      schema: `import { z } from "zod";\n\nexport const userSchema = z.object({\n${property}\n});\n`
    });
  });
}

for (const endpoint of ["flow-to-javascript", "typescript-to-javascript"]) {
  test(`${endpoint} returns syntax errors as HTTP 500`, async () => {
    const response = await post(endpoint, "const = ;", "text/plain");
    assert.equal(response.status, 500);
    assert.match(await response.text(), /Unexpected token/);
  });
}

for (const endpoint of [
  "flow-to-typescript",
  "html-to-pug",
  "json-schema-to-openapi-schema",
  "typescript-to-flow",
  "typescript-to-json-schema"
]) {
  test(`${endpoint} returns conversion errors as HTTP 500`, async () => {
    const response = await post(endpoint, null);
    assert.equal(response.status, 500);
    assert.ok((await response.text()).length > 0);
  });
}

test("typescript-to-zod returns conversion errors in HTTP 200 JSON", async () => {
  const response = await post("typescript-to-zod", null);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    error: "Cannot read properties of null (reading 'length')"
  });
});

test("malformed JSON returns HTTP 400 before conversion", async () => {
  const response = await fetch(new URL("/api/html-to-pug", base), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "{"
  });
  assert.equal(response.status, 400);
  assert.equal(await response.text(), "Invalid JSON");
});

test("request bodies retain the 1mb limit", async () => {
  const response = await post(
    "typescript-to-javascript",
    "a".repeat(1024 * 1024 + 1),
    "text/plain"
  );
  assert.equal(response.status, 413);
  assert.equal(await response.text(), "Body exceeded 1mb limit");
});

test("a body exactly at the byte limit still converts", async () => {
  const body = JSON.stringify({ type: "string" });
  const response = await fetch(
    new URL("/api/json-schema-to-openapi-schema", base),
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: body.padEnd(1024 * 1024)
    }
  );
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { type: "string" });
});

for (const method of ["PUT", "PATCH", "DELETE"]) {
  test(`${method} retains the legacy conversion handler`, async () => {
    const response = await fetch(
      new URL("/api/typescript-to-javascript", base),
      {
        method,
        headers: { "content-type": "text/plain" },
        body: "const count: number = 1;"
      }
    );
    assert.equal(response.status, 200);
    assert.equal(await response.text(), "const count = 1;");
  });
}

test("GET reaches the legacy conversion handler", async () => {
  const response = await fetch(new URL("/api/typescript-to-javascript", base));
  assert.equal(response.status, 200);
  assert.equal(await response.text(), "");
});
