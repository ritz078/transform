const BabiliPlugin = require("babili-webpack-plugin")
const webpack = require("webpack")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');

    config.node = {
      fs: 'empty'
    }

    config.plugins.push(
      new webpack.DefinePlugin({IN_BROWSER: true})
    )

    if (!dev) {
      config.plugins.push(
        new BabiliPlugin()
      )
    }

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config;
  }
};