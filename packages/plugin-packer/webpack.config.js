"use strict";

const path = require("path");
const common = require("./webpack.common");
const { merge } = require('webpack-merge');

const config = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.cjs",
    library: {
      name: '@kintone/plugin-packer',
      type: 'commonjs2',
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    publicPath: "/dist/",
    watchContentBase: true,
    open: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: { transpileOnly: true },
      },
    ],
  },
};

module.exports = merge(common, config);
