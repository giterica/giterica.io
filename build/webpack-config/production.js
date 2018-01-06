const webpackMerge = require("webpack-merge");
const baseConf = require("./base");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const prodConf = {
  stats: {
    assets: true,
    colors: true,
    version: true,
    hash: true,
    timings: true,
    chunks: true,
    chunkModules: true
  },
  plugins: [
    //new ExtractTextPlugin({
    //  filename: "css/[name].[contenthash].css"
    //}),
  ]
};

module.exports = webpackMerge(baseConf, prodConf);
