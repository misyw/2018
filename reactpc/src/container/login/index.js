import React , { Component } from  'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Form, Icon, Input, Button, Layout , message , Tooltip} from 'antd';
import login from '../../api/login';
import { FormFetch , JsonFetch, mapStateToProps,mapDispatchToProps } from '../../common/tools';
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
    const { loading } = this.props;
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
          <Tooltip placement="topLeft" title="username: admin  psd:qweasd" arrowPointAtCenter>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
              登 录
            </Button>
            </Tooltip>
          </FormItem>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class Login extends  Component {
  state={
    loading:false
  }

  componentDidMount = ()=>{
    // JsonFetch('/getsql',{
    //   body:{},
    //   suceess:(data)=>{
    //     console.log(JSON.stringify(data))
    //   },
    //   error:(data)=>{
    //       console.log(data)
    //   }
    // })
  }
  loginSubmit = (data)=>{
    this.setState({loading:true})
    if(data.userName==='admin' && data.password==='qweasd'){

      FormFetch(login.verLogin,{
        body:{
          userName:data.userName,
          password:data.password
        },
        suceess:(data)=>{
            console.log(JSON.stringify(data))
            if(data.result && data.result.loginState){
              this.props.actions.setLoginSuccess(data.result.loginState)
              setTimeout(()=>{
                this.setState({
                  loading:false
                })
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
      setTimeout(()=>{
        this.setState({
          loading:false
        })
      },1000)
    }
  }
  render(){
    const {loading}=this.state;
    console.log(this.props)
    return (
      <Layout className='container'>
        <div className='container-center'>
          <WrappedNormalLoginForm login={(data)=>this.loginSubmit(data)} loading={loading} ></WrappedNormalLoginForm>
        </div>
      </Layout>
    )
  }
}

export default withRouter(connect(
  mapStateToProps,mapDispatchToProps
)(Login));