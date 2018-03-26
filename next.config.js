const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { ANALYZE } = process.env;
const glob = require("glob");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");

module.exports = {
  webpack: (config, { dev }) => {
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
      new webpack.DefinePlugin({ IN_BROWSER: true })
    );

    config.resolve.alias = {
      "babel-core": "babel-standalone"
    };

    // if (!dev) {
    //   config.plugins.push(
    //     new SWPrecacheWebpackPlugin({
    //       minify: true,
    //       staticFileGlobsIgnorePatterns: [/\.next\//],
    //       staticFileGlobs: [
    //         "static/**/*" // Precache all static files by default
    //       ],
    //       runtimeCaching: [
    //         {
    //           handler: "networkFirst",
    //           urlPattern: /^https?.*/
    //         }
    //       ]
    //     })
    //   );
    // }

    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "server",
          analyzerPort: 8888,
          openAnalyzer: true
        })
      );
    }

    return config;
  },

  exportPathMap() {
    const pathMap = {};
    glob.sync("pages/**/*.js", { ignore: "pages/_document.js" }).forEach(s => {
      const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, "/");
      console.log(path);
      pathMap[path] = { page: path };
    });
    return pathMap;
  }
};
