var webpack = require('webpack');
var helpers = require('./helpers');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack/hot/only-dev-server', //改变文件立刻刷新，而且保存了现有的state
    './src/app.jsx' //入口配置文件
  ],

  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },

  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ["react", "es2015"],
        plugins: ["transform-object-rest-spread"]
      }
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: 'url-loader?limit=10000&name=./images/[name].[ext]'
    }, {
      test: /\.(css|less)$/,
      loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};
