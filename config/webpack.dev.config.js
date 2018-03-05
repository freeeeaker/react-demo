const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    // noParse: /lodash/,
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    alias: {
      // '@lodash': path.resolve(__dirname, '../node_modules/lodash/lodash.min.js')
    }
    // mainFields: ['main']
  },
  devServer: {
    port: 8086,
    inline: true,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}