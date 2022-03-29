const path = require("path")

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