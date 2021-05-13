const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: false,
  mode: 'development',
  entry: './src/index.js',
  output:{
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    // assetModuleFilename: 'images/[hash][ext][query]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use:['style-loader', 'css-loader']
      },
      // {
      //   test: /\.html$/,
      //   loader: 'html-loader',
      // },
      // {
      //   test: /\.(png|jpe?g)/,
      //   type: 'asset/resource',
      // },
      // {
      //   test: /\.(js)$/,
      //   exclude: /node_modules/,
      //   use: ['babel-loader'],
      // },
    ],
  },

};
