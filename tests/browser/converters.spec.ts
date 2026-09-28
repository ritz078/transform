import { test, expect } from "@playwright/test";

const cases = [
  {
    path: "/",
    input:
      '<svg xmlns="http://www.w3.org/2000/svg"><rect width="10" height="10" /></svg>',
    output: /<svg[\s\S]*<path/
  },
  {
    path: "/json-to-rust-serde",
    input: '{"name":"Ada"}',
    output: /pub name: String/
  },
  {
    path: "/graphql-to-typescript",
    input: "type User { name: String! }",
    output: /export type User/
  },
  {
    path: "/css-to-js",
    input: ".example { color: red; }",
    output: /color: "red"/
  },
  {
    path: "/json-to-proptypes",
    input: '{"name":"Ada"}',
    output: /name: PropTypes.string/
  },
  {
    path: "/html-to-jsx",
    input: '<label class="name" for="name">Name</label>',
    output: /className="name" htmlFor="name"/
  },
  {
    path: "/typescript-to-javascript",
    input: "const answer: number = 42;",
    output: /const answer = 42/
  },
  {
    path: "/css-to-tailwind",
    input: ".example { display: flex; }",
    output: /@apply flex/
  }
];

for (const fixture of cases) {
  test(`converts ${fixture.path}`, async ({ page }) => {
    await page.goto(fixture.path);
    const input = page.getByRole("textbox", { name: /Editor content/ }).first();
    await expect(input).toBeVisible();
    await page.evaluate(
      value => (window as any).monaco.editor.getModels()[0].setValue(value),
      fixture.input
    );
    // Monaco virtualizes rendered lines; its model is the full user-visible editor value.
    await expect
      .poll(() =>
        page.evaluate(() => {
          const editor = (window as any).monaco?.editor;
          return (
            editor
              ?.getModels()
              .filter((model: any) => model.uri.scheme === "inmemory")
              .at(-1)
              ?.getValue() || ""
          );
        })
      )
      .toMatch(fixture.output);
  });
}

test("navigation preserves input across converter pages", async ({ page }) => {
  await page.goto("/json-to-yaml");
  const input = page.getByRole("textbox", { name: /Editor content/ }).first();
  await expect(input).toBeVisible();
  await page.evaluate(() =>
    (window as any).monaco.editor
      .getModels()[0]
      .setValue('{"migration":"preserved"}')
  );
  await page.locator('a[href="/json-to-toml"]').click();
  await expect(page).toHaveURL(/\/json-to-toml$/);
  await expect
    .poll(() =>
      page.evaluate(() =>
        (window as any).monaco?.editor.getModels()[0]?.getValue()
      )
    )
    .toBe('{"migration":"preserved"}');
  await page.reload();
  await expect
    .poll(() =>
      page.evaluate(() =>
        (window as any).monaco?.editor.getModels()[0]?.getValue()
      )
    )
    .toBe('{"migration":"preserved"}');
});
