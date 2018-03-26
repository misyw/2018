import React from 'react'
// import { connect, Provider } from 'react-redux'
import {withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class Home extends React.Component{
    
    
    handleClick = () =>{
        console.log('点击')
        console.log(this.props)
        if(this.props.authReducer){
            //6- 这里获取的是about.js中点击保存之后的内容
            console.log('Global Variable',this.props.authReducer.actions)//{username:'yuwei',age:33}
        }
    }
    render(){
        return (
            <div>
                <h1>这里的内容是Home组件中的</h1>
                <button  onClick={this.handleClick}>点击获取About中存储的props</button>
                <Link to="/About">点击进入关于我们自己</Link>
            </div>
        )
    }

}
//5-链接上redux可以获取全局变量
 export default withRouter(connect(state => state)(Home));