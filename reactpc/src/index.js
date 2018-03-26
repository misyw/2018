import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
//-------------------------------------------------------------
import store from './store'
import createHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'
import App from './App'

render(
  <Provider store={store}>
    <Router history={createHistory()}>
        <App/>
    </Router>
  </Provider>
,
  document.getElementById('root')
)