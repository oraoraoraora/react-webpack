var webpack = require('webpack');
var config = require('./webpack.config.js');
var webpackDevServer=require('webpack-dev-server');


config.plugins[0].definitions.__DEV__=true;
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

var compiler = webpack(config);

var server = new webpackDevServer(compiler, {port:"8288",host:"localhost",publicPath:"/",contentBase:"src", inline: true, hot: true, progress: true });
server.listen(8288);
