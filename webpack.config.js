var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  name: 'js',
  entry: './src/app.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      { 
        test: /\.scss$/, 
        loader: 'style-loader!css-loader!sass-loader' 
      }, 
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
}