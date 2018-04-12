import React from 'react'
// import { connect, Provider } from 'react-redux'
import {withRouter } from 'react-router'
import { connect } from 'react-redux';
import  LayoutContent from '../../component/LayoutContent'
import  LayoutHeader from '../../component/LayoutHeader'
import  LayoutSider from '../../component/LayoutSider'
import { Layout } from 'antd';

class Home extends React.Component{
    render(){
        const {routes } =this.props;
        return (
            <Layout>
                <Layout>
                    <LayoutHeader></LayoutHeader>
                </Layout>
                <Layout>
                    <LayoutSider></LayoutSider>
                    <LayoutContent routes={routes}></LayoutContent>
                </Layout>
            </Layout>
        )
    }
}
//5-链接上redux可以获取全局变量
 export default withRouter(connect(state => state)(Home));