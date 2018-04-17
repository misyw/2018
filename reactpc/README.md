
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
#### 画个重点

##### 1.全局Confirm 

描述：搭载redux改变props状态 从而改变弹出层的显示隐藏，并给予成功回调。

实现：将在container中的view层,使用withRouter(connect(state,dispatch))(Component),即可全局调用同一个Modal

```
-container/testDemo/testDemo1[调用] 
-component/Confirm [实现] 
-component/LayoutContent [视图] 
-actions/index.js  {toggleConfirm , toggleConfirmFail } [逻辑]
-reducers/toggleConfirm.js [逻辑]
-reducers/index.js [逻辑]
```

##### 2.添加echart.js

[API参考（包含按需加载、配置项详情）](https://www.npmjs.com/package/echarts-for-react)

```
yarn add echarts
yarn add echarts-for-react
```

##### 3.fetch用法

[参考文档](https://blog.csdn.net/cnweike/article/details/74012249)

```
var opts = {
    method:"POST",   //请求方法
    body:{},   //请求体
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
}

fetch(url, opts)
    .then((res,body)=>{
    	return res.json()//此处需要转成json格式或text格式
    }).then((resonseData) => {
        options.suceess(resonseData) //将返回值传回调用方
    })
    .catch((res,body)=>{
    	return options.error(res)//将错误信息传回调用方
    })
```

