import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import CommonConfig from './webpack.common';

let config = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src', '.build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
  ],
};

if (process.env.NODE_ENV === 'development') {
  config = merge(config, {
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
    },
  });
} else {
  config = merge(config, {
    plugins: [
      new CleanWebpackPlugin([
        'src/.build/index.html',
        'src/.build/app.bundle.js',
      ]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
    ],
  });
}

export default merge(CommonConfig, config);
