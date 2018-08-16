import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import styles from './css/home.css';
import { Button } from 'antd';
console.log('出现的话则打包失败哦')
class App extends React.PureComponent{

  render(){ 
    return(
        <span>
          <small id='app' className={styles.color}>App6666</small>
          <p className='globalColor'>此处为全局样式</p>
          <p className={styles.localColor}>此处为局部样式</p>
          <Button onClick={()=>this.props.history.push({pathname:'/about',state:{adas:123213}})}>toAboutPage</Button>
          <Button onClick={()=>this.props.history.push({pathname:'/conect'})}>toConectPage</Button>


          <Link to={{pathname:'/about'}}>123213</Link>
          <hr/>
        </span>
    )
  }
}
export default App;
// $(function(){
//   $('#app').html('')
// })