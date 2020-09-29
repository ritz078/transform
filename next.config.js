const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

const config = {
  webpack(config, options) {
    config.node = {
      fs: "empty",
      module: "empty",
      net: "mock",
      tls: "mock"
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.DEV": JSON.stringify(options.dev),
        IN_BROWSER: !options.isServer,
        IS_DEV: options.dev
      }),
      new MonacoWebpackPlugin({
        output: "../../public/static/monaco",
        languages: [
          "json",
          "typescript",
          "css",
          "javascript",
          "html",
          "sql",
          "xml",
          "yaml",
          "rust",
          "markdown",
          "go",
          "graphql",
          "scala",
          "plaintext",
          "java",
          "pug"
        ],
        features: ["folding"]
      })
    );

    config.module.rules.unshift({
      test: /\.worker\.ts/,
      use: {
        loader: "worker-loader",
        options: {
          name: "static/[hash].worker.js",
          publicPath: "/_next/"
        }
      }
    });

    config.output.globalObject = 'typeof self !== "object" ? self : this';

    // Temporary fix for https://github.com/zeit/next.js/issues/8071
    config.plugins.forEach(plugin => {
      if (plugin.definitions && plugin.definitions["typeof window"]) {
        delete plugin.definitions["typeof window"];
      }
    });

    config.output.webassemblyModuleFilename = "static/wasm/[modulehash].wasm";

    return config;
  }
};

module.exports = withCSS(config);
