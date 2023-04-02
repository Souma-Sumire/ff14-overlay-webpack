const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  performance: { hints: false },
  entry: {
    castingMonitor: "./src/castingMonitor/index.js",
    fflogsUploaderDownload: "./src/fflogsUploaderDownload/index.js",
    keigennRecord: "./src/keigennRecord/index.js",
    keySkillTimer: "./src/keySkillTimer/index.js",
    teamWatch: "./src/teamWatch/index.js",
    teamWatchSettings: "./src/teamWatch/settings.js",
    mpTick: "./src/mpTick/index.js",
    index: "./src/index/index.js",
    castingToChinese: "./src/castingToChinese/index.js",
    limitBreakTip: "./src/limitBreakTip/index.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/castingMonitor/index.html",
      filename: "castingMonitor.html",
      chunks: ["castingMonitor"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/fflogsUploaderDownload/index.html",
      filename: "fflogsUploaderDownload.html",
      chunks: ["fflogsUploaderDownload"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/keigennRecord/index.html",
      filename: "keigennRecord.html",
      chunks: ["keigennRecord"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/keySkillTimer/index.html",
      filename: "keySkillTimer.html",
      chunks: ["keySkillTimer"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/teamWatch/index.html",
      filename: "teamWatch.html",
      chunks: ["teamWatch"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/teamWatch/settings.html",
      filename: "teamWatchSettings.html",
      chunks: ["teamWatchSettings"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/mpTick/index.html",
      filename: "mpTick.html",
      chunks: ["mpTick"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/index/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/castingToChinese/index.html",
      filename: "castingToChinese.html",
      chunks: ["castingToChinese"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/limitBreakTip/index.html",
      filename: "limitBreakTip.html",
      chunks: ["limitBreakTip"],
    }),
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.join(__dirname, "node_modules"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(png|jpg|gif)/,
        type: "asset/resource",
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
    ],
  },
};
