const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  webpack: (config, { isServer }) => {
    config.node = {
      fs: "empty"
    };

    config.module.rules.push({
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    });

    config.plugins.push(
      new LodashModuleReplacementPlugin({
        collections: true,
        shorthands: true
      }),
      new webpack.DefinePlugin({ IN_BROWSER: !isServer }),
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
        features: ["folding", "goToDefinitionMouse", "goToDefinitionCommands"]
      })
    );

    config.resolve.alias = {
      ...config.resolve.alias,
      "babel-core": "babel-standalone"
    };

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }

    config.output.globalObject = `this`;

    return config;
  },

  transpileModules: ["monaco-editor"]
};
