"use strict";

const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const src = path.resolve(__dirname, "../../src");
const destination = path.resolve(__dirname, "../../docker/dist");

const minify = false;

module.exports = {
  entry: {
    //styles: path.join(src, 'scss/all.scss'),
    // index: path.join(src, 'index.pug'),
    bundle: path.join(src, 'main.js'),
  },
  output: {
    path: destination,
    filename: 'js/[name].[hash].js',
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use:  ['html-loader', 'pug-html-loader?pretty&exports=false']
      },
      // {
      //    test: /\.scss$/,
      //    use: ['style-loader', 'css-loader', 'sass-loader'],
      // },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'index.html',
      template: path.join(src, 'index.pug'),
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: minify,
        removeAttributeQuotes: false
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
    }),
    new ExtractTextPlugin({
      filename: "css/[name].[contenthash].css"
    }),
  ],
};
