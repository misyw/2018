import React from 'react'
// import { connect, Provider } from 'react-redux'
import {withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { Layout, Menu, Avatar} from 'antd';
const { Header } = Layout;

class LayoutHeader extends React.Component{
    
    state={
        selectedKeys:['1']
    }
    componentWillReceiveProps = () =>{
        // console.log(this.props.history.location)
        //判断当前的页面path,并且更改header导航的默认选择
        if(this.props.history.location.pathname==='/About'){
            this.setState({
                selectedKeys:['2']
            })
        }else{
            this.setState({
                selectedKeys:['1']
            })
        }
        
    }

    signOut = () =>{
        //退出登录
        this.props.history.push('/login')
    }
    render(){
        const { selectedKeys } =this.state;
        return (
            <Header className="header">
                <div className="logo"/>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    selectedKeys={selectedKeys}
                    style={{ lineHeight: '64px',float:'left',paddingLeft:100 }}
                >
                    <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
                    <Menu.Item key="2"><Link to='/About'>关于</Link></Menu.Item>
                </Menu> 
                <div style={{ lineHeight: '64px',float:'right' }}>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon="user" onClick={this.signOut}/>
                </div>
            </Header>
        )
    }
}
//5-链接上redux可以获取全局变量
 export default withRouter(connect(state => state)(LayoutHeader));