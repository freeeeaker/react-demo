const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist/'),
    publicPath: '/assets/'
  },
  module: {
    // noParse: /lodash/,
    rules: [
      {
        test: /\.jsx?/,
        use: 'babel-loader',
        include: [path.resolve(__dirname, '../src')]
      },
      {
        test: /\.scss$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    alias: {
      '@component': path.resolve(__dirname, '../src/component/'),
      '@style': path.resolve(__dirname, '../src/style/')
    }
    // mainFields: ['main']
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
}