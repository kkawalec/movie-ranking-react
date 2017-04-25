var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var WebpackMd5Hash = require('webpack-md5-hash')
/*
 * Frontend webpack - development
 */
module.exports = {
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, 'app/index')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new WebpackMd5Hash(),
    new ExtractTextPlugin('css/[name].[chunkhash].css'),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    //Create HTML file that includes reference to bundlejs
    new HtmlWebpackPlugin({
      template: 'template/index.ejs',
      filename: '200.html',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.json$/,
      //   use: 'json-loader'
      // },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?sourceMap!sass-loader?sourceMap',
          publicPath: '../'
        })
      },
      // {
      //   // Capture eot, ttf, svg, woff, and woff2
      //   test: /\.(woff2?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: 'file-loader?name=/fonts/[hash].[ext]'
      // },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'file-loader?name=/fonts/[hash].[ext]'
      //     },
      //     {
      //       loader: 'svgo-loader',
      //       options: {
      //         plugins: [
      //           {removeTitle: true},
      //           {convertColors: {shorthex: false}},
      //           {convertPathData: false}
      //         ]
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: 'file-loader?name=/img/[hash].[ext]'
      },
    ]
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty'
  },
}
