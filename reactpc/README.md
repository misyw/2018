
## reactpc项目介绍

- [使用框架内容](#updating-to-new-releases)
- [简介](#introduction)
- [重大突破](#important-progress)

## Updating to New Releases


*使用框架如下： `react-router` `react-redux` `redux` `reactjs` `react-router-redux` `history` `react-router-dom` `less` `less-loader`

`react-router-redux` [官方地址](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)

在`react-scripts`中`webpack.config.dev.js`中添加了如下依赖：
```
 {
     test: /\.less$/,
     use: [
     	require.resolve('style-loader'),
        {
         loader: require.resolve('css-loader'),
         options: {
           importLoaders: 1,
         },
        },
        require.resolve('less-loader'),
     ],
},
```

## introduction
该项目为试手demo,旨在搭建`react-router`和`redux`结合在一起的后台框架界面,将会使用`ant`样式库。

##important-progress
项目中搭载了 路由，redux完成了动作分发、存储、以及获取值的动作
重要文件为：
```
-About.js
-authReducer.js
```