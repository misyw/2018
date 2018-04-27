import React from 'react'
// import { connect, Provider } from 'react-redux'
import {withRouter } from 'react-router'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {mapStateToProps } from '../../common/tools'
class baseIndex extends React.Component{
    render(){
        return (
            <div>
                <h1>这里的内容是baseIndex组件中的</h1>
                
                <Link to="/About">点击进入关于我们自己</Link>
            </div>
        )
    }
}
//5-链接上redux可以获取全局变量
export default withRouter(connect(mapStateToProps)(baseIndex));