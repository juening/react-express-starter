var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname + '/static',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  },
  devtool: 'cheap-module-eval-source-map'
};
