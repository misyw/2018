import asyncComponent from './asyncComponent';

export default { 
  path: '/About',
  name: '关于自己',
  component: asyncComponent(() => import("../container/about")),
  routes: [
   // { exact:true, path: '/About', name: '保养登记', component: asyncComponent(() => import("../container/About"))},
    // { 
    //   path: '/operation/repairMgt',
    //   name: '维修管理', 
    //   component: asyncComponent(() => import("../container/operation/repairMgt")), 
    //   routes: [
    //   //{ exact:true, path: '/operation/repairMgt/repairReg', name: '报修登记', component: asyncComponent(() => import("../container/operation/repairMgt/repairReg"))},
    //   ] 
    // },
  ]
}