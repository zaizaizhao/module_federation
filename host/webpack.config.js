const { Configuration } = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    port: 9002,//* remote项目
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    }),

    new ModuleFederationPlugin({
      name: "host",
      remotes: {
        //* remote对应导出应用的name,地址为端口号/filename
        remote: "remote@http://localhost:9001/remoteEntry.js"
      }
    })
  ]
};
module.exports = config;