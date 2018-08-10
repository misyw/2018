import React from 'react';
import { Modal} from 'antd';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import {mapStateToProps , mapDispatchToProps } from '../../common/tools';
/**
 * @param title 弹出层标题
 * @param content 弹出层内容
 * @param fn 弹出层点击OK的callback
 * this.props.toggleConfirm(true,{
      title:'警告！',
      content:'警告！文字哦~',
      fn:(data)=>{
        console.log(data);//Confirm返回true
        console.log('可以执行callback内容了！')
      }
    })
 */
 class Confirm extends React.Component{

    handleOk = ()=>{
        this.props.actionState.toggleConfirm.callback('Confirm返回true');
        this.props.actions.toggleConfirmFail(false)//关闭弹窗
    }
    handleCancel = ()=>{
        this.props.actions.toggleConfirmFail(false)//关闭弹窗
    }
    render(){
			const { toggle , confirmOption } = this.props.actionState.toggleConfirm
			return(
				<Modal
						visible={toggle}
						onOk={this.handleOk}
						onCancel={this.handleCancel}
						title= {confirmOption.title || ''}>
								{confirmOption.content  || ''}
				</Modal>
			)
    }
}
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Confirm));
