const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // arquivo de entrada
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  resolve: {
    extensions: [ '.js', '.jsx' ] // naturalmente só entende js, falamos para entender, também .jsx
  },
  devServer: {
    static: path.resolve(__dirname, 'public')
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html")
  })],
  module: { // instruções de como organizar os arquivos
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ],
  }
}