var path = require('path')

var loaders = require('./loaders')
var resolve = require('./resolve')
var entry = require('./entry')
var env = require('./env')

module.exports = {
  entry: entry,
  module: {
    loaders: loaders
  },
  output: {
    path: __dirname + '/../dist',
    publicPath: '/assets',
    filename: 'bundle.js'
  },
  resolve: resolve,
  devServer: {
    publicPath: '/assets',
    filename: 'bundle.js',
    port: env.port,
    host: '0.0.0.0',
    historyApiFallback: true
  }
}
