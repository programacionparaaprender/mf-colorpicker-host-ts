const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "https://mf-colorpicker-host-ts.netlify.app/",
    //publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        //mf_colorpicker: "mf_colorpicker@https://fantastic-mf-colorpicker.netlify.app/remoteEntry.js",
        //mf_colorlist: "mf_colorlist@https://fantastic-mf-colorlist.netlify.app/remoteEntry.js",
        mf_colorlist:"mf_colorlist@https://mf-colorlist-ts2.netlify.app/remoteEntry.js",
        mf_colorpicker:"mf_colorpicker@https://mf-colorpicker-ts.netlify.app/remoteEntry.js",
        mf_googlemaps_ts:"mf_googlemaps_ts@https://mf-googlemaps-ts.netlify.app/remoteEntry.js",
        //mf_colorpicker: "mf_colorpicker@http://localhost:3001/remoteEntry.js",
        //mf_colorlist: "mf_colorlist@http://localhost:3002/remoteEntry.js",
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};