"use strict";

const { merge } = require('webpack-merge');
const common = require("../webpack.common");
const path = require("path");

const config = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "..", "docs", "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "..", "docs"),
    publicPath: "/dist/",
    watchContentBase: true,
    open: true,
  },
};

module.exports = merge(common, config);
