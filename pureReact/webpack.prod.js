const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');//每次编译的时候 删除dist文件夹
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
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
    new CleanWebpackPlugin(['build']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':JSON.stringify('production'),
      'process.env.objName':JSON.stringify(process.env.npm_config_objName),
    })
  ],
  output:{
    filename:'[name].[hash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  //此处为提取公共文件-common.bundle.js + vendor.bundle.js 
  optimization: {
    //使用'uglifyjs-webpack-plugin'插件打包的时候清除console.log
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions:{
          compress:{
            drop_console:true
          }
        }
      })
    ],
    splitChunks: {
        cacheGroups: {
            commons: {
                name: "commons",
                chunks: "all",
                minChunks: 2
            }
        }
    }
  }
})