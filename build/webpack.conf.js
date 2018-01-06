"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const src = path.resolve(__dirname, "..", "src");
const destination = path.resolve(__dirname, "..", "docker", "dist");

module.exports = {
  devServer: {
    hot: true,
    inline: true,
  },
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: true,
    timings: true,
    chunks: false,
    chunkModules: false
  },
  entry: {
    //styles: path.join(src, 'styles.js'),
    index: path.join(src, 'index.pug'),
    //bundle: path.join(src, 'index.js'),
  },
  output: {
    path: destination,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use:  ['html-loader', 'pug-html-loader?pretty&exports=false']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: path.join(src, 'index.pug'),
    }),
  ],
};
