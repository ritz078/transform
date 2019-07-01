const withTypescript = require("@zeit/next-typescript");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const withCSS = require("@zeit/next-css");
const webpack = require("webpack");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");
const withTM = require("next-transpile-modules");

const config = {
  webpack(config, options) {
    config.node = {
      fs: "empty"
    };

    if (options.isServer && options.dev)
      config.plugins.push(new ForkTsCheckerWebpackPlugin());

    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.DEV": JSON.stringify(options.dev),
        IN_BROWSER: !options.isServer
      }),
      new MonacoWebpackPlugin({
        output: "../../static",
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
          "scala"
        ],
        features: [
          "folding",
          "goToDefinitionMouse",
          "goToDefinitionCommands",
          "contextmenu",
          "coreCommands",
          "hover",
          "referenceSearch"
        ]
      })
    );

    config.module.rules.unshift({
      test: /\.worker\.ts/,
      use: {
        loader: "worker-loader",
        options: { fallback: true, inline: true }
      }
    });

    config.output.globalObject = `this`;

    return config;
  },

  target: "serverless",

  transpileModules: ["monaco-editor"]
};

module.exports = withTM(withCSS(withTypescript(config)));
