var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var DEV = process.env.DEV;
module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8288', 
    'webpack/hot/only-dev-server', 
    './src/js/app.js',
  ],
  output: {
    path: '/build/js',
    filename: 'bundle.js'
  },
  resolve: {
      modulesDirectories: ["./js", "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /(\.js||\.jsx)/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'] 
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!sass-loader' 
      },
      {
        test: /(\.gif|\.png)/,
        loaders: ['url-loader?limit=1000&name=img/[name].[ext]']
      },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "url?&limit=1000name=fonts/[name].[ext]" },
      { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=1000&name=fonts/[name].[ext]" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=1000&mimetype=application/octet-stream&name=fonts/[name].[ext]" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=1000&mimetype=image/svg+xml&name=img/[name].[ext]" },
    ]
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.DefinePlugin({ __DEV__: false}),
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom',
      Store: 'Store',
      Utils: 'Utils'
    }),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([{ from: 'src/index.html', to: '../index.html' },{ from: 'src/img', to: '../img' },{ from: 'src/fonts', to: '../fonts' }]) 
  ],

};



