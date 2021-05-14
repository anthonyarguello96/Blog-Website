const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(common, {
  devtool: false,
  mode: 'development',
  output:{
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'images/[hash][ext][query]'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // filename: 'index.html',
      template: 'src/index.html',
      minify: false,
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      }
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

});
