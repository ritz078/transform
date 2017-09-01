const BabiliPlugin = require("babili-webpack-plugin")
const webpack = require("webpack")
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const glob = require("glob")

module.exports = {
  webpack: (config, { dev }) => {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');

    config.node = {
      fs: 'empty'
    }

    config.module.rules.push(
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    )

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
  },

  exportPathMap() {
    const pathMap = {}
    glob.sync('pages/**/*.js', { ignore: 'pages/_document.js' }).forEach(s => {
      const path = s.split(/(pages|\.)/)[2].replace(/^\/index$/, '/')
      console.log(path)
      pathMap[path] = { page: path }
    })
    return pathMap
  }
};