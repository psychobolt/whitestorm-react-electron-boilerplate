import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import CommonConfig from './webpack.common';

const appCSS = new ExtractTextPlugin('styles.css');
const venderCSS = new ExtractTextPlugin('vender.css');

let config = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src', '.build'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: appCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src', 'node_modules'),
        use: venderCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    appCSS,
    venderCSS,
  ],
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
        'src/.build/*.html',
        'src/.build/app.bundle.js',
        'src/.build/*.css',
      ]),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
      }),
      new webpack.optimize.UglifyJsPlugin(),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
      new HtmlWebpackPlugin(htmlConfig),
    ],
  });
}

export default merge(CommonConfig, config);
