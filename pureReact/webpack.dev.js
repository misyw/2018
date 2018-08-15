const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports =merge(common,{
  entry:{
    app:'./src/index.js'
  },
  mode: "development",
  externals:{
    React:'react',
    ReactDOM:'react-dom',  
    jquery: 'jQuery'
  },
  devServer:{
    contentBase:path.resolve(__dirname, 'public'),
    hot:true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('devolpment'),
      'process.env.objName':JSON.stringify(process.env.npm_config_objName),
   })
  ]
})