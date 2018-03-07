const webpack = require('webpack')
const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, '../src/index.js')
  },
  output: {
    filename: 'bundle.js',
    chunkFilename: 'chunk-[id].js'
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
    extensions: ['.js', '.jsx', '.scss'],
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules'],
    alias: {
      '@component': path.resolve(__dirname, '../src/component/'),
      '@style': path.resolve(__dirname, '../src/style/'),
      '@lodash': path.resolve(__dirname, '../node_modules/lodash/')
    }
    // mainFields: ['main']
  },
  plugins: [
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
}