import React , { Component } from 'react'
// import { connect, Provider } from 'react-redux'
import { Route, withRouter ,Router } from 'react-router'
import { Link } from 'react-router-dom'

 class Home extends React.Component{
    
    constructor(props){
        super(props)
    }
    handleClick = () =>{
        debugger
        this.props.actions
    }
    render(){
        return (
            <div>
                <h1 onClick={this.handleClick}>这里的内容是Home组件中的</h1>
                <Link to="/About">点击进入关于我们自己</Link>
            </div>
        )
    }

}
 

 export default withRouter(Home)