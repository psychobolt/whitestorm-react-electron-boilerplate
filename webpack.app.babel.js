import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin';

import CommonConfig from './webpack.common';

const devMode = process.env.NODE_ENV !== 'production';

let config = {
  entry: ['css-hot-loader/hotModuleReplacement', './src/index.js'],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'src', '.build'),
  },
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\xel.min.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.s?css$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|otf|eot)$/,
        use: ['file-loader'],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        xelStyles: {
          name: 'xel.theme',
          test: /[\\/]node_modules[\\/]xel[\\/].+\.css$/,
          chunks: 'all',
          enforce: true,
        },
        venderStyles: {
          name: 'vender',
          test: /[\\/]node_modules[\\/](?!(xel[\\/])).+\.css/,
          chunks: 'all',
          enforce: true,
        },
        styles: {
          name: 'styles',
          test: /src[\\/].+\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

let htmlConfig = {
  filename: 'index.html',
  template: 'src/index.html',
};

if (devMode) {
  config = merge(config, {
    devtool: 'eval-source-map',
    devServer: {
      host: 'localhost',
      port: 3000,
      hot: true,
      historyApiFallback: true,
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin(htmlConfig),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development'),
      }),
      new BundleAnalyzerPlugin(),
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
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          '*.html',
          'app.bundle.js',
          '*.app.bundle.js',
          '*.css',
          '*.woff',
          '*.woff2',
        ],
      }),
      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
      new HtmlWebpackPlugin(htmlConfig),
    ],
  });
}

export default merge(CommonConfig, config);
