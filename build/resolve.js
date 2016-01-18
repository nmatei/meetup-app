var path = require('path')

module.exports = {
  extensions: ['','.js','.jsx','.json'],
  alias: {
    src: path.resolve(__dirname, '../src')
  },
  modulesDirectories: [
    'app_modules',
    'node_modules'
  ]
}
