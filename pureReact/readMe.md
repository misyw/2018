#### 项目说明

- 手动配置webpack - react 环境
- 最终目标 -  将react 与 react-dom 打包时分离 - externals


#### 实际完成情况
- 可运行react环境
- 如下
1.在页面`index.html`中添加JQ对应的CDN。 (使用CDN，可在全局使用第三方CDN)
```
 <script
    src="https://code.jquery.com/jquery-3.1.0.js"
    integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk="
    crossorigin="anonymous">
  </script>
```
对应的`webpck.dev.js`中添加代码配置如下：
```
  externals:{
    React:'react',
    ReactDOM:'react-dom',  
    jquery: 'jQuery'
  }
```

2.公共代码分离
在`webpck.prod.js`中加入
```
  entry:{
    app:'./src/index.js',
    vendor: ['react', 'react-dom'],//此处为要分离出来的代码
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
```
该代码串将会生成 `commons.bundle.js` 和 `vendor.bundle.js` 文件。
3.热更新
`webpck.common.js` 文件中如下:
```
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
  ],
```
`webpck.dev.js` 文件中如下:
```
  devServer:{
    contentBase:path.resolve(__dirname, 'public'),
    hot:true
  }
```