import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'
import Home from './container/Home.js'
//-------------------------------------------------------------
import { routerReducer, routerMiddleware } from 'react-router-redux'
import store from './store'
import createHistory from 'history/createBrowserHistory'
import { Link } from 'react-router-dom'
import { Route, withRouter ,Router } from 'react-router'
import App from './App'
// const AppContainer = () => (
//     <div>
//         <Route exact path="/" component={() => (<h1>Home <Link to="/about">About</Link></h1>)} />
//         <Route path="/about" component={Home} />
//     </div>
// )

// const App = withRouter(connect(state => ({
//   location: state.location,
// }))(AppContainer))

render(
  <Provider store={store}>
    <Router history={createHistory()}>
        <App/>
    </Router>
  </Provider>
,
  document.getElementById('root')
)