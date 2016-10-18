var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
   devtool: 'cheap-module-eval-source-map',
   
   output: {
      path: helpers.root('dist'),
      publicPath: "/",
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].chunk.js'
   },

   // 代理服务器，类似于nginx
   devServer: {
      hot: true,
      inline: true,
      proxy: {
         '/api/*': {
            target: 'http://192.168.15.171:8080',
            secure: false
         }
      }
   },
});