/**新增用户 */
import React, { Component } from 'react';
import { Button } from 'antd';
class addUser extends Component {

  getUser = ()=>{
    return {'id':123}
  }

  fetchPostsH = (id)=>{
    if(id){
      return  {'name':'yuwei'}
    }
  }

  fn = async ()=>{
    const user = await this.getUser();
    const posts = await this.fetchPostsH(user.id);
    return { user, posts };
  }

  click = ()=>{
    this.fn().then(res => console.log(res)).catch(err => console.error(err.stack));
  }

  render() {
    return (
     <span>新增用户
      <Button onClick={this.click}>P/A</Button>
     </span>
    )
  }
}
export default addUser;