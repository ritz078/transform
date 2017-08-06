const BabiliPlugin = require("babili-webpack-plugin")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');

    config.node = {
      fs: 'empty'
    }

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