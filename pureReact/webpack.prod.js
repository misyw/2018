const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');//每次编译的时候 删除dist文件夹
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports =merge(common,{
  entry:{
    app:'./src/index.js',
    vendor: ['react', 'react-dom']
  },
  mode: "production",
  externals:{
    React:'react',
    ReactDOM:'react-dom',    
    jquery: 'jQuery'
  },
  plugins:[
    new CleanWebpackPlugin(['public']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production'),
      'process.env.objName':JSON.stringify(process.env.npm_config_objName),
    })
  ],
  output:{
    filename:'[name].bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  //此处为提取公共文件-common.bundle.js + vendor.bundle.js 
  optimization: {
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "commons",
                chunks: "initial",
                minChunks: 2
            }
        }
    }
  }
})