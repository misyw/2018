import React from 'react'
import {
  HashRouter as Router, Switch
} from 'react-router-dom';
import RouteWithSubRoutes from './routeWithSubRoutes';
import Home from '../container/home/index.js';
// import About from './about';
import Login from '../container/login/index.js';
import baseIndex from '../container/home/baseIndex.js';
import About from '../container/about';
import user from './user';
import testDemo from './testDemo';
const routes = [
    { path: '/Login', component: Login},
    { path: '/', component: Home, routes: [
      { path: '/baseIndex', component: baseIndex},
      { path: '/About', component: About},
      user , testDemo
    ]}
]
const RouterMonitor = () => (
  <Router>
    <Switch>
      {
        routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))
      }
    </Switch>
  </Router>
)

export default RouterMonitor