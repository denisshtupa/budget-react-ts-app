// webpack.config.js
const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Add support for Sass
      const oneOfRule = webpackConfig.module.rules.find((rule) => rule.oneOf);
      if (oneOfRule) {
        const sassRule = {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
          include: path.resolve(__dirname, 'src'),
        };
        oneOfRule.oneOf.unshift(sassRule);
      }

      return webpackConfig;
    },
  },
};
