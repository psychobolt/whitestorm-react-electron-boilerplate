import path from 'path';
import merge from 'webpack-merge';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

import CommonConfig from './webpack.common';

let config = {
  entry: ['./src/main.js'],
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'src', '.build'),
  },
  node: {
    __dirname: true,
  },
  target: 'electron-main',
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['main.bundle.js'],
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  config = merge(config, {
    devtool: 'inline-source-map',
  });
} else {
  config = merge(config, {
    node: {
      __dirname: false,
    },
  });
}

export default merge(CommonConfig, config);
