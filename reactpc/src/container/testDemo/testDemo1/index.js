/**testDemo1 */
import React, { Component } from 'react';
import { Button } from 'antd';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
class testDemo1 extends Component {


  confirm = ()=>{
    console.log('click confirm')
    //告诉redux需要打开confirm表单-并且传入确认时候回调函数
    this.props.toggleConfirm(true,{
      title:'警告！',
      content:'警告！testDemo1文字哦~',
      fn:(data)=>{
        console.log(data);//Confirm返回true
        console.log('可以执行callback内容了！')
      }
    })
  }
  render() {
    return (
     <span>
        <Button onClick={this.confirm}>点击这里要达到弹出confirm的效果</Button>
     </span>
    )
  }
}
export default withRouter(connect(state => state, dispatch => ({
  toggleConfirm: (bool,option) => dispatch({type:'TOGGLE_CONFIRM',bool,option})
}))(testDemo1));