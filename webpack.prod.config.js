'use strict';
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  context: __dirname + '/source/',  
  entry: [__dirname + '/source/js/index.js'],    
  output: {
    path:  __dirname + '/build/',
    publicPath: '/build/',
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({ 
            fallbackLoader: 'style-loader', 
            loader: ['css-loader', 'sass-loader'] 
          })
      },
      {
          test: /\.(jpg|jpeg|gif|png|woff|woff2|eot|ttf|svg|otf)$/,
          exclude: /\/node_modules\//,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
      },
      {
        test : /\.jsx?/,
        use : 'babel-loader'
      },
      { 
        test: /\.json$/, 
        use: 'json-loader'
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: './style/style.min.css',
      disable: false,
      allChunks: true
    }),
    new CopyWebpackPlugin([
      { from: __dirname + '/source/img/', to: __dirname + '/build/img/' },
      { from: __dirname + '/source/style/img/', to: __dirname + '/build/style/img/' }
    ]),
    new UglifyJSPlugin({
      minimize: true, 
      output: {
        comments: false
      }
    })
  ]
}