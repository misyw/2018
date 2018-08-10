import React from 'react'
// import { connect, Provider } from 'react-redux'
import {withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout, Menu} from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

const menuJson = [
    {
        title:'用户管理',
        key:'userCtrl',
        path:'/user',
        subMenuList:[
            {key:'option1',title:'新增用户',path:'/user/addUser'},
            {key:'option2',title:'用户列表',path:'/user/userList'},
        ]
    },
    {
        title:'测试小样',
        key:'testDemo',
        path:'/testDemo',
        subMenuList:[
            {key:'test1',title:'测试Demo1',path:'/testDemo/testDemo1'},
            {key:'test2',title:'测试Demo2',path:'/testDemo/testDemo2'},
            {key:'test3',title:'测试Demo3',path:'/testDemo/testDemo3'},
        ]
    },
]


class LayoutSider extends React.Component{
    
    componentWillMount =()=>{
        console.log(this.props)//{id: "DCASDAASDQWEQWASD"}
    }
    render(){
       const menuList =  menuJson.map((item=>{
            return (
                <SubMenu key={item.key} title={item.title}>
                   {
                    item.subMenuList.map(subItem =>{
                        return (
                            <Menu.Item key={subItem.key}><Link to={subItem.path}>{subItem.title} </Link></Menu.Item>
                        )
                    })
                   }
                </SubMenu>
            )
        }))
        return (
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['userCtrl']}
                    style={{ height: '100%', borderRight: 0 }}
                    >
                    {menuList}
                </Menu>
            </Sider>
        )
    }
}

/**LayoutSider menuList 静态标签
 * <SubMenu key="sub1" title={<span>subnav 1</span>}>
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
    </SubMenu>
    <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
    </SubMenu>
 */
//5-链接上redux可以获取全局变量
 export default withRouter(connect(state => state)(LayoutSider));