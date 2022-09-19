const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  /* Punto de entrada de webpack para empaquetat y generar el bundle. */
  entry: "./src/index.js",

  /* Punto a donde enviamos nuestro bundle una vez generado. */
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },

  /* Manejo de extensiones */
  resolve: {
    extensions: [".js", ".jsx"],
  },

  /*Empaquetador en Modo produccion */
  mode: "production",

  /* Reglas */
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      /* Por defecto la salida es index.html, podemos usar filename para cambiar su nombre de salida en dist */
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerWebpackPlugin(), // Plugin de optimizacion para css.
      new TerserWebpackPlugin(), // Plugin de optimizacion para javascrip.
    ],
  },
};