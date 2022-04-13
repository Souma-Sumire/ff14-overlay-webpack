const { merge } = require("webpack-merge");
const baseConfig = require("./webpack.base.js");

const prodConfig = {
  mode: "production",
  devtool: "cheap-module-source-map",
};
module.exports = merge(baseConfig, prodConfig);
