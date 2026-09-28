import { test, expect } from "@playwright/test";

test("homepage metadata is present without client JavaScript", async ({
  request
}) => {
  const response = await request.get("/");
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect(html).toContain("<title>Transform</title>");
  expect(html).toContain(
    "A polyglot web converter that&#x27;s going to save you a lot of time."
  );
});

test("legacy redirects retain query parameters", async ({ request }) => {
  for (const [from, to] of [
    ["/svg-to-jsx", "/"],
    ["/json-to-flow-types", "/json-to-flow"],
    ["/json-to-ts-interface", "/json-to-typescript"],
    ["/json-schema-to-ts", "/json-schema-to-typescript"]
  ]) {
    const response = await request.get(`${from}?source=bookmark`, {
      maxRedirects: 0
    });
    expect(response.status()).toBe(308);
    expect(response.headers().location).toBe(`${to}?source=bookmark`);
  }
});

test("unknown routes return a real 404", async ({ request }) => {
  const response = await request.get("/unknown-converter");
  expect(response.status()).toBe(404);
  expect(await response.text()).toContain("Page not found");
});
