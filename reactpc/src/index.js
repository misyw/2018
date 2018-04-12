import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
//-------------------------------------------------------------
import store from './store'
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'
import App from './App'
// import { LocaleProvider} from 'antd';
// import zhCN from 'antd/lib/locale-provider/zh_CN';  
render(
  <Provider store={store}>
    <Router history={createHistory()}>
         <App/>
    </Router>
  </Provider>
,
  document.getElementById('root')
)