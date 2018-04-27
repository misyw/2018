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

    componentWillMount () {
        // console.log('modalComponent WillMount',this.props);//全局初始化confirm的时候的内容
    }
    
    componentWillReceiveProps= (nextProps) =>{
        //console.log('modalComponent ReceiveProps',nextProps)//设置打开confirm的时候的props
    }

    handleOk = ()=>{
        this.props.actionState.toggleConfirm.callback('Confirm返回true');
        this.props.actions.toggleConfirmFail(false)//关闭弹窗
    }
    handleCancel = ()=>{
        this.props.actions.toggleConfirmFail(false)//关闭弹窗
    }
    render(){
        console.log(this.props.actionState.toggleConfirm.toggle)
        debugger
        return(
            <Modal
                visible={this.props.actionState.toggleConfirm.toggle}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                title= {this.props.actionState.toggleConfirm.confirmOption.title || ''}>
                    {this.props.actionState.toggleConfirm.confirmOption.content  || ''}
            </Modal>
        )
    }
}
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Confirm));

// 哆牙呆 扣牙呆那塔 吼哇 kei你都哈那嗖嘎
// 啊类那呆 哭类 大 呆一码 搜古 kei组以带苦类
// 伯苦哇kei迷路 planet 嘛哇栗子 字改呆
// 一字摸 kei迷路 搜吧呆
// 伯哭 咯尬搜艾呆 那该来哆
// 撒有那啦 那袋 那一哟
// 该哦尬啦你 几我哈子类奥大
// 撒一够麻袋米有 古代有 唉一也诶米 哈来 艾呆扣大
// 啦 啦啦 啦啦啦啦 啦啦 
// 哆那呆 苦那呆 开爱 就谷 嘿吐里塔塔组奈带
// 露西那袋 干 足以呆 一码 萨拉 摸哆类牙西奶
// Kei迷弄一 那一吧休摆 头吼奥你苦来呆
// 毛一几哆阴一 咬苦喔 扛几塔卡塔 那该来哆
// 卡迷撒嘛男 呆那一哟
// 一字嘛呆嘛 呆嘛九呆九
// 诶来吧来拿 一卡那 系米有 那五到奈猫 尬米西买 喽大
// kei米哇 伯苦no 呆一哟
// 苏摆呆奥猫艾西 那该来哆
// 撒有那啦 那袋 那一哟
// Kei哦尬啦你 几我哈子类奥大
// 撒一够麻袋米有 古代有 唉一也诶米 哈来 艾呆扣大
// 啦 啦啦 啦啦啦啦 啦啦