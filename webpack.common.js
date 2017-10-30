import merge from 'webpack-merge';

process.env.BABEL_ENV = 'webpack2';

let config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config = merge(config, {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['source-map-loader'],
          enforce: 'pre',
        },
      ],
    },
  });
}

const commonConfig = config;
export default commonConfig;
