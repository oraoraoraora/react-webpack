var webpack = require('webpack');
var config = require('./webpack.config.js');
var compiler = webpack(config);
var CleanWebpackPlugin = require('clean-webpack-plugin');

 config.plugins.push(
    new CleanWebpackPlugin(['build'], {
      root: __dirname,
      verbose: true, 
      dry: false,
      exclude: ['src']
    })
  );
 config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
       compress: {
         warnings: false,
         drop_console: false,
         unsafe: true,
       }
    })
  );
config.devtool = 'cheap-module-source-map';
compiler.run(function() {});