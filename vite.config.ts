import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import wasm from "vite-plugin-wasm";
import stdlib from "node-stdlib-browser";
import { fileURLToPath } from "node:url";

const aliases = Object.fromEntries(
  [
    "styles",
    "components",
    "constants",
    "workers",
    "utils",
    "hooks",
    "assets"
  ].map(name => [
    `@${name}`,
    fileURLToPath(new URL(`./${name}`, import.meta.url))
  ])
);

const inject = {
  Buffer: ["buffer", "Buffer"] as [string, string],
  process: "process"
};

function browserPolyfills(worker = false): Plugin {
  return {
    name: "transform-browser-polyfills",
    enforce: "pre",
    resolveId(source) {
      if ((worker || this.environment?.name === "client") && stdlib[source]) {
        return this.resolve(stdlib[source], undefined, { skipSelf: true });
      }
    }
  };
}

export default defineConfig({
  define: { global: "globalThis" },
  resolve: {
    alias: {
      "react-dom/lib/HTMLDOMPropertyConfig": fileURLToPath(
        new URL(
          "./node_modules/htmltojsx/node_modules/react-dom/lib/HTMLDOMPropertyConfig.js",
          import.meta.url
        )
      ),
      "react-dom/lib/SVGDOMPropertyConfig": fileURLToPath(
        new URL(
          "./node_modules/htmltojsx/node_modules/react-dom/lib/SVGDOMPropertyConfig.js",
          import.meta.url
        )
      ),
      ...aliases
    }
  },
  plugins: [
    tanstackStart({ srcDirectory: "." }),
    nitro({
      traceDeps: [
        "@babel/core",
        "@babel/plugin-transform-flow-strip-types",
        "@babel/plugin-transform-typescript",
        "@khanacademy/flow-to-ts",
        "typescript-converter",
        "typescript",
        "recast",
        "html2pug",
        "@openapi-contrib/json-schema-to-openapi-schema",
        "flowgen",
        "ts-json-schema-generator",
        "ts-to-zod"
      ]
    }),
    react(),
    wasm(),
    browserPolyfills()
  ],
  worker: {
    format: "es",
    plugins: () => [wasm(), browserPolyfills(true)],
    rolldownOptions: { transform: { inject } }
  },
  build: {
    target: "esnext",
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/, /assets\/vendor/]
    }
  },
  environments: {
    client: {
      build: { rolldownOptions: { transform: { inject } } },
      optimizeDeps: {
        entries: ["components/AppShell.tsx", "pages/*.tsx"],
        rolldownOptions: {
          plugins: [browserPolyfills(true)],
          transform: { inject, define: { global: "globalThis" } }
        }
      }
    }
  },
  server: { port: 3000 }
});
