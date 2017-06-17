module.exports = {
  webpack: (config, { dev }) => {
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'UglifyJsPlugin');

    config.node = {
      fs: 'empty'
    }

    return config;
  }
};