import asyncComponent from './asyncComponent';

export default { 
  path: '/user',
  name: '用户管理',
  component: asyncComponent(() => import("../container/user")),
  routes: [
    { exact:true, path: '/user/addUser', name: '新增用户', component: asyncComponent(() => import("../container/user/addUser"))},
    { exact:true, path: '/user/userList', name: '用户列表', component: asyncComponent(() => import("../container/user/userList"))},
  ]
}
