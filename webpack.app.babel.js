import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import CommonConfig from './webpack.common';

let config = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src', '.build'),
  },
};

let htmlConfig = {
  filename: 'index.html',
  template: 'src/index.html',
};

if (process.env.NODE_ENV === 'development') {
  config = merge(config, {
    devtool: 'inline-source-map',
    devServer: {
      port: 3000,
    },
    plugins: [
      new HtmlWebpackPlugin(htmlConfig),
      new ExtractTextPlugin('styles.css'),
    ],
  });
} else {
  htmlConfig = Object.assign({}, htmlConfig, {
    minify: {
      collapseBooleanAttributes: true,
      decodeEntities: true,
      html5: true,
      minifyCSS: true,
      minifyJS: true,
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeOptionalTags: true,
      removeRedundantAttributes: true,
      sortAttributes: true,
      sortClassName: true,
      trimCustomFragments: true,
      useShortDoctype: true,
    },
  });
  config = merge(config, {
    plugins: [
      new CleanWebpackPlugin([
        'src/.build/index.html',
        'src/.build/app.bundle.js',
        'src/.build/styles.css',
      ]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new ExtractTextPlugin('styles.css'),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
      new HtmlWebpackPlugin(htmlConfig),
    ],
  });
}

export default merge(CommonConfig, config);
