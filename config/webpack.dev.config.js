const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
      { test: /\.jsx?/, use: 'babel-loader' }
    ]
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    port: 8080,
    inline: true,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}