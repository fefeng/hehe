var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
   devtool: 'source-map',

   output: {
      path: helpers.root('dist'),
      publicPath: '/',
      filename: '[name].[hash].js',
      chunkFilename: '[id].[hash].chunk.js'
   },

   plugins: [
      new webpack.optimize.UglifyJsPlugin({
         mangle: {
            keep_fnames: true
         }
      }),
      new webpack.DefinePlugin({
         'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
      })
   ]
});
