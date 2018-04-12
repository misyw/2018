import asyncComponent from './asyncComponent';

export default { 
  path: '/testDemo',
  name: '用户管理',
  component: asyncComponent(() => import("../container/user")),
  routes: [
    { exact:true, path: '/testDemo/testDemo1', name: 'testDemo1', component: asyncComponent(() => import("../container/testDemo/testDemo1"))},
    { exact:true, path: '/testDemo/testDemo2', name: 'testDemo2', component: asyncComponent(() => import("../container/testDemo/testDemo2"))},
  ]
}
