import React , { Component } from  'react';
import { Form, Icon, Input, Button, Layout} from 'antd';
import './login.less';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.login(values)
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
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
            <Button type="primary" htmlType="submit" className="login-form-button">
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
    this.props.history.push('/Home')//跳转至Home页面
  }
  render(){
      return (
        <Layout style={{padding:200,height:'100vh'}}>
          <div style={{display:'flex',justifyContent: 'center',textAlign:'center'}}>
            <WrappedNormalLoginForm login={(data)=>this.loginSubmit(data)}></WrappedNormalLoginForm>
          </div>
        </Layout>
      )
  }
}
export default Login ;