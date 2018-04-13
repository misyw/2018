import React from 'react'
// import { connect, Provider } from 'react-redux'
import {withRouter } from 'react-router'
import { connect } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import RouteWithSubRoutes from '../../router/routeWithSubRoutes';
import  Confirm from '../Confirm'
import { Layout, Breadcrumb} from 'antd';
const {Content } = Layout;

const styles ={
    container:{ background: '#f9f9f9', padding: 24, margin: 0, minHeight: 280 },
    breadcrumb:{
        width:'100%',
        padding:10,
        borderRadius:8,
        background:'#fff',
    },
    gap:{
        padding:'15px 0',
    }
}

class LayoutContent extends React.Component{
    
    render(){
        const { routes } =this.props;
        return (
            <Content style={styles.container}>
                <Confirm></Confirm>
                <Breadcrumb  style={styles.breadcrumb}>
                    <Breadcrumb.Item>首页</Breadcrumb.Item>
                    <Breadcrumb.Item>option1</Breadcrumb.Item>
                </Breadcrumb>
                <div style={styles.gap}>
                    <Switch >
                        {
                        routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route}/>
                        ))
                        }
                        <Redirect from={'/'} to={'/baseIndex'}/>  
                    </Switch>
                </div>
            </Content>
               
        )
    }
}
//5-链接上redux可以获取全局变量
 export default withRouter(connect(state => state)(LayoutContent));