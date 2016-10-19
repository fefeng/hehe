let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let eslint = require('../.eslintrc');

var autoprefixer = require('autoprefixer');

module.exports = {
  // 程序入口
  entry: {
    bundle: './src/app.jsx',
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux']
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }],
    loaders: [{
      test: /\.js?$/,
      loaders: ['react-hot', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /\.(css|less)$/,
      loader: 'style-loader!css-loader!postcss-loader!less-loader'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style', 'css!sass!postcss-loader')
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
      loader: 'url-loader?limit=8192&name=images/[name].[hash].[ext]'
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'js/vendor.[hash].js'), //  分拆文件
    new ExtractTextPlugin('css/app.[hash].css'), //  sass文件单独打包
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(), //  热替换模块
    new HtmlWebpackPlugin({
      filename: 'index.html', //  文件路径
      template: './index.html', //  文件模板
      minify: {
        // removeComments: true,	                                                //  移除HTML中的注释
        // collapseWhitespace: true	                                                //  删除空白符与换行符
      }
    })
  ],
  eslint: eslint,
  postcss: [autoprefixer({
    browsers: ['last 2 versions']
  })]
};