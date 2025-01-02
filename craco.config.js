const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      if (env === 'production') {
        webpackConfig.output.publicPath = './';
      }
      return webpackConfig;
    },
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
};