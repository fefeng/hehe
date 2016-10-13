let webpack = require('webpack');
let helpers = require('./helpers');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let path = require("path");

module.exports = {
  // entry: [
  //   'webpack/hot/only-dev-server', //改变文件立刻刷新，而且保存了现有的state
  //   './src/app.jsx' //入口配置文件
  // ],

  entry: {
    bundle: './src/app.jsx',
    vendor: ['react']
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          presets: ["react", "es2015"],
          plugins: ["transform-object-rest-spread"]
        }
      },
      {
        test: /\.(css|less)$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
      {
        test: /\.html$/,
        loader: "html"
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=8192&name=images/[name].[hash].[ext]'
      }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.[hash].js'),
    new ExtractTextPlugin('css/app.[hash].css'),
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './index.html',
      //压缩HTML文件
      minify: {
        // removeComments: true,	//移除HTML中的注释
        collapseWhitespace: true	//删除空白符与换行符
      }
    })
  ]
};
