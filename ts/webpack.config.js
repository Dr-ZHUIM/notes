'use strict';
const path = require('path');
module.exports = {
  entry: './src/main.ts',
  // context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, 'public/dist'),
    filename: 'app.js',
    publicPath:'/dist/'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve:{
    extensions: [".js",".ts"]
  },
  devtool: 'source-map',
};
