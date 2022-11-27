const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  devtool: "eval-cheap-source-map",
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
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
