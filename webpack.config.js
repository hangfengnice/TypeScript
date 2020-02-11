const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new FriendlyErrorsWebpackPlugin()
  ]
}
