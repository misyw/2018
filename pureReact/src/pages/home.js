import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
// import $ from 'jquery';
import styles from './css/home.css';
import { Button  } from 'antd';
import { hot } from 'react-hot-loader'
console.log('出现的话则打包失败哦')
class App extends React.PureComponent{
  render(){ 
    return(
        <span>
          <img src={require('@Img/power.png')}/>
          <img src={require('@Img/power-small.png')}/>
          <small id='app' className={styles.color}>App6666</small>
          <p className='globalColor'>1234此处为全局样式</p>
          <p className={styles.localColor}>此处为局部样式</p>
          <Button onClick={()=>this.props.history.push({pathname:'/about'})}>toAboutPage</Button>
          <Button onClick={()=>this.props.history.push({pathname:'/conect',state:{adas:123213}})}>toConectPage</Button>
          <Link to={{pathname:'/about'}}>about123213</Link>
          <hr/>
        </span>
    )
  }
}
export default hot(module)(App);//hot(module)(App)
// $(function(){
//   $('#app').html('')
// })