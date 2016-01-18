var env = require('./env')

module.exports = [
  // WebpackDevServer host and port
  'webpack-dev-server/client?http://0.0.0.0:' + env.port,
  'webpack/hot/only-dev-server',
  './index.js'
]
