const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  devtool: "eval-cheap-source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        auth: "auth@http://localhost:8082/remoteEntry.js",
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
      // shared: {
      //   react: {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "18.2.0",
      //   },
      //   "react-dom": {
      //     singleton: true,
      //     strictVersion: true,
      //     requiredVersion: "18.2.0",
      //   },
      // },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
