const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports ={
  module:{
    rules:[
      {
        test: /\.(jsx|js)$/, // 匹配特定条件
        include: [ // 匹配特定路径
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./index.html',
      filename: 'index.html', 
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  
}