import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
 class About extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            tabIndex: 1,
            loading: false,
        }
    }
    handleClick = () =>{
        this.props.setUser({username:'yuwei',age:33})//1在这里执行action派发动作。
        console.log(this.props.history);
        this.props.history.push('/')
    }
    getActions = () =>{
        debugger
        console.log(this.props)
        console.log(this.props.authReducer.actions)//4 通过该内容获取存储的user信息
    }
    getActionsEvent = () =>{
        this.props.actionsEvent.onToggleTodo();
    }
    render(){
        // const { onToggleTodo } = this.props
        return (
            <div>
                <h1>这里的内容是About组件中的</h1>
                <button type="button" onClick={this.handleClick}>点击执行click事件</button>
                <button type="button" onClick={this.getActions}>点击getActions事件</button>
                <button onClick={this.getActionsEvent}>点击这个执行stroeactionsEvent方法</button>
            </div>
        )
    }
}


//export default withRouter(About)
// export function mapDispatchToProps(dispatch) {
//     return {
//         onIncreaseClick: () => {
//             debugger
//             dispatch({type:'AUTH_SUCCESS'})
//         }
//     }   
// }
export default withRouter(connect(state => state, dispatch => ({
    setUser: user => dispatch( {type:'AUTH_SUCCESS',user}),//2通过该命令派发出去。
    actionsEvent: bindActionCreators({onToggleTodo:()=>{ console.log(123) }}, dispatch)
    // mapDispatchToProps
}))(About));