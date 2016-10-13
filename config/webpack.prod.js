var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var path = require("path");
module.exports = webpackMerge(commonConfig, {
   devtool: 'source-map',

   output: {
      path: helpers.root('dist'),
      publicPath: "/",
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].chunk.js'
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
