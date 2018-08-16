import React from 'react';
import {Router,Route, Switch} from 'react-router-dom';
import asyncComponent from './asyncComponent';
import createHistory from 'history/createHashHistory';//createBrowserHistory
// 
const routes = [
  {
    path: "/",
    exact:true,
    component: asyncComponent(()=>import('../pages/home'))
  },
  {
    path: "/about",
    exact:true,
    component: asyncComponent(()=>import('../pages/about'))
  },
  {
    path: "/conect",
    exact:true,
    component: asyncComponent(()=>import('../pages/conect'))
  }
];

const RouteWithSubRoutes = route => (
  <Route
    exact={route.exact}
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);


const RouterMonitor = () => (
  <Router history={createHistory()}>
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
