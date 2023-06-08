const { Configuration } = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//* webpack5内置的
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
/**
 * @type {Configuration} //配置智能提示
 */
const config = {
  mode: "none",
  entry: "./index.js",
  output: {
    filename: "bundle.js"
  },
  devServer: {
    port: 9001,//* remote项目
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),
    new ModuleFederationPlugin({
      name: "remote",
      filename: "remoteEntry.js",
      //*暴露模块
      exposes: {
        //* addList为导出的名字
        "./addList": "./list.js"
      }
    })
  ]
};
module.exports = config;