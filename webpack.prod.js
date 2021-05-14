const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  devtool: false,
  mode: 'production',
  output:{
    filename: 'index.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(
      {
        filename:"[name].[contenthash].css"
      }
    )
  //   new HtmlWebpackPlugin({
  //     filename: 'index.html',
  //     template: 'src/index.html',
  //     minify: false,
  //   })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use:[MiniCssExtractPlugin.loader, 'css-loader']
      },
  //     // {
  //     //   test: /\.html$/,
  //     //   loader: 'html-loader',
  //     // },
  //     // {
  //     //   test: /\.(png|jpe?g)/,
  //     //   type: 'asset/resource',
  //     // },
  //     // {
  //     //   test: /\.(js)$/,
  //     //   exclude: /node_modules/,
  //     //   use: ['babel-loader'],
  //     // },
    ],
  },
  optimization:{
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify:{
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  }

});
