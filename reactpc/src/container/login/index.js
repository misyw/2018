import React , { Component } from  'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Layout , message } from 'antd';
import login from '../../api/login';
import { FormFetch } from '../../common/tools';
import './login.less';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  state={
    loading:false
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.setState({ loading: true });
        this.props.login(values)
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{width:300}}>
        <h1>用户数据管理系统</h1>
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" className='opacity' />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" className='opacity' />} type="password" placeholder="Password" />
          )}
          </FormItem>
          <FormItem> 
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              登 录
            </Button>
          </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class Login extends  Component {

  loginSubmit = (data)=>{
    console.log(data)
    if(data.userName==='admin' && data.password==='qweasd'){

      FormFetch(login.verLogin,{
        body:{
          userName:data.userName,
          password:data.password
        },
        suceess:(data)=>{
            console.log(JSON.stringify(data))
            if(data.result && data.result.loginState){
              this.props.setLoginState(data.result.loginState)
              setTimeout(()=>{
                message.success(data.msg)
                this.props.history.push('/Home')//跳转至Home页面
              },1000)
            }
        },
        error:(data)=>{
            console.log(data)
        }
      })
     
    }else{
      message.error('账号信息输入错误！')
    }
  }
  render(){
    return (
      <Layout className='container'>
        <div className='container-center'>
          <WrappedNormalLoginForm login={(data)=>this.loginSubmit(data)}></WrappedNormalLoginForm>
        </div>
      </Layout>
    )
  }
}

export default withRouter(connect(state => state, dispatch => ({
  setLoginState: bool => dispatch({type:'LOGIN_SUCCESS',bool}),//2通过该命令派发出去。
}))(Login));