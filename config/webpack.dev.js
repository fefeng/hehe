var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
   devtool: 'cheap-module-eval-source-map',

   output: {
      path: './build',
      filename: "/bundle.js" //输出文件，即index.html需要引入的文件
   },

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