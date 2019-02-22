import merge from 'webpack-merge';
import path from 'path';

let config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'babel-loader',
        ],
      },
    ],
  },
};

if (process.env.NODE_ENV === 'development') {
  config = merge(config, {
    mode: 'development',
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
} else {
  config = merge(config, {
    mode: 'production',
  });
}

const commonConfig = config;
export default commonConfig;
