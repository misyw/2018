const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');//单独把 CSS 文件分离出来
const webpack = require('webpack');

module.exports ={
  module:{
    rules:[
      {
	  		test:/\.(png|svg|jpg|gif)$/,
	  		use:[
          {//limit字节范围内的图片，格式转换为base64的编码
            loader: 'url-loader',
            options: {
              limit: 8192,
              name:"static/images/[name]_[hash:8].[ext]",
            }
          },
	  		]
	  	},
      {
        test:/\.css$/,
        exclude: /node_modules|antd\.css/,//除开node_modules文件夹中的css和antd.css,都将执行以下规则
        use:ExtractTextPlugin.extract({ 
          fallback: 'style-loader',//将 css-loader 解析的结果转变成 JS 代码
          use: [
            {
              loader:'css-loader',
              options: {
                modules: true,//开启css-modules对样式添加css-hash
                localIdentName: "[local]_[hash:base64:8]"
              }
            }
          ]
        })
      },
      {
        test:/\.css$/,
        include: /node_modules|antd\.css/,//如果用了全局样式库，则仅对node_modules中的css和antd.css执行以下规则
        use:ExtractTextPlugin.extract({ 
          fallback: 'style-loader',//将 css-loader 解析的结果转变成 JS 代码
          use: [
            {
              loader:'css-loader',
              options: {
                modules: false,//关闭css-modules对样式添加css-hash
              }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        include: /node_modules/,
        use:ExtractTextPlugin.extract({ 
          fallback: 'style-loader',
          use: [
            {//关闭css-modules对样式的模块化
              loader: 'css-loader',
              options: {
                  module: false
              }
            },
            {//此处的属性针对antd中的less更换主题颜色
              loader: 'less-loader',
              options: {
                modifyVars: { "@primary-color": "#f2a11c" },
                javascriptEnabled: true
              }
            }
          ]
        })
      },
      // {
      //   test: /\.less$/,
      //   exclude: /node_modules/,
      //   use:ExtractTextPlugin.extract({ 
      //     fallback: 'style-loader',
      //     use: [
      //       {
      //         loader: 'css-loader',
      //         options: {
      //             module: true,
      //             localIdentName: "[local]_[hash:base64:8]"
      //         }
      //       },
      //       {//此处的属性支持更换antd less的主题颜色
      //         loader: 'less-loader',
      //         options: {
      //           modifyVars: { "@primary-color": "#f2a11c" },
      //           javascriptEnabled: true
      //         }
      //       }
      //     ]
      //   })
      // },
      {
        test: /\.(jsx|js)$/, // 匹配特定条件
        include: [ // 匹配特定路径
          path.resolve(__dirname, 'src'),
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: [
              "react-hot-loader/babel",
              "syntax-dynamic-import",
              ["import", { "libraryName": "antd","style": true }]
            ]
          }
        }
      }
    ],
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      filename: 'index.html', 
    }),
    new ExtractTextPlugin('static/css/[name].css'),
  ],
  resolve:{
    alias:{
      "@Img": path.resolve(__dirname, 'src/common/image'),
    }
  }
}