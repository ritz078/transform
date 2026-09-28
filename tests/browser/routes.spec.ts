import { readdirSync } from "node:fs";
import { test, expect } from "@playwright/test";

const pages = readdirSync(
  new URL("../../pages", import.meta.url)
).filter(name => name.endsWith(".tsx"));

for (const file of pages) {
  const path = file === "index.tsx" ? "/" : `/${file.slice(0, -4)}`;
  test(`default conversion ${path}`, async ({ page }) => {
    await page.goto(path);
    await expect(
      page.getByRole("textbox", { name: /Editor content/ }).first()
    ).toBeVisible();
    await expect
      .poll(() =>
        page.evaluate(
          () =>
            (window as any).monaco?.editor
              .getModels()
              .filter((model: any) => model.uri.scheme === "inmemory")
              .at(-1)
              ?.getValue() || ""
        )
      )
      .not.toBe("");
    await expect(
      page.getByRole("heading", { level: 4 }).filter({
        hasNotText: /SVGO optimization|This code is converted on the server/
      })
    ).toHaveCount(0);
  });
}
