/**用户管理首页 */
import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '../../router/routeWithSubRoutes';
class user extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Switch>
        {
          routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))
        }
        <Route path="/user" render={()=><Redirect to="/user/userList"/>}/>
      </Switch>
    )
  }
}
export default user;