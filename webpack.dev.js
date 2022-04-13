const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");
const path = require("path");

const devConfig = {
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 8080,
  },
};
module.exports = merge(baseConfig, devConfig);
