const webpack = require('webpack');
const path = require('path')
const HtmlWebpackPlugin =  require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractSass = new ExtractTextPlugin({
    filename: "main.scss"
});

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/index.js`,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: ['env', 'react'],
            // plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
        }
      },
      {
        test: /\.(png|jpg|svg|otf)$/,
        use: {
          loader: 'file-loader'
        }
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use: [
          "css-loader",
          "sass-loader",
        ]
        })
      }
    ]
  },
  plugins: [
  new ExtractTextPlugin("main.scss"),
  new HtmlWebpackPlugin({template: './src/index.html'})
  // new webpack.DefinePlugin({})
],
node: {
  fs: 'empty'
}
}
