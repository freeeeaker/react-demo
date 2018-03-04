const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'productino',
  entry: {
    app: '../src/index.js'
  },
  output: {
    name: 'bundle.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/'
  }
}