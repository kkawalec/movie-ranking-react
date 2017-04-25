var path = require('path')
var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './app/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({
      title: 'React builded',
      alwaysNotify: true
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        use: ['react-hot-loader/webpack', 'babel-loader'],
        include: path.join(__dirname, 'app')
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?sourceMap',
          'sass-loader?sourceMap'
        ]
      },
      // {
      //   // Capture eot, ttf, svg, woff, and woff2
      //   test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      //  // use: 'file-loader?name=fonts/[name].[ext]'
      //   use: 'file-loader'
      // },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'file-loader'
      //  use: 'file-loader?name=img/[name].[ext]'
      },
    ]
  },
  // node: {
  //   net: 'empty',
  //   tls: 'empty',
  //   dns: 'empty'
  // },
}
