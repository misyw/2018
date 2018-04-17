/**testDemo1 */
import React, { Component } from 'react';
import { Button , Modal} from 'antd';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
const confirm = Modal.confirm;
class testDemo1 extends Component {

  confirm = ()=>{
    console.log('click confirm')
    //告诉redux需要打开confirm表单-并且传入确认时候回调函数
    this.props.toggleConfirm(true,{
      title:'警告！',
      content:'哇！花了这么多功夫写的Confirm,居然发现官方有写好的，好气哦！',
      fn:(data)=>{
        console.log(data);//Confirm返回true
        console.log('可以执行callback内容了！')
      }
    })
  }
  antConfirm = () =>{
    confirm({
      okText:"是的",
      cancelText:"我没有",
      title: '生气了吗？',
      content: `感觉自己写的组件太繁杂了吗？`,
      onOk: async () => {
        
          Modal.success({
            title: '淡定淡定',
            content: '学如逆水行舟，不进则退',
          });
      },
      onCancel: () => {
        Modal.error({
          title: '淡定淡定',
          content: '要学会直面自己的内心',
        });
      }
    })
  }
  render() {
    return (
     <span>
        <Button onClick={this.confirm}>点击这里要达到弹出confirm的效果</Button>
        <Button onClick={this.antConfirm}>点击这里出发官方Antd - Confirm</Button>
     </span>
    )
  }
}
export default withRouter(connect(state => state, dispatch => ({
  toggleConfirm: (bool,option) => dispatch({type:'TOGGLE_CONFIRM',bool,option})
}))(testDemo1));