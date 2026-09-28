import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/browser",
  timeout: 45000,
  expect: { timeout: 20000 },
  workers: 1,
  fullyParallel: true,
  use: {
    baseURL: process.env.TEST_BASE_URL || "http://127.0.0.1:3000",
    browserName: "chromium",
    channel: "chrome",
    screenshot: "only-on-failure",
    trace: "retain-on-failure"
  }
});
