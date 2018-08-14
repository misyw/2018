import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import $ from 'jquery';
import styles from './css/home.css';
import { Button } from 'antd';
class App extends React.PureComponent{
  render(){ 
    return(
      <span>
        <small id='app' className={styles.color}>App6666</small>
        <p className='globalColor'>此处为全局样式</p>
        <p className={styles.localColor}>此处为局部样式</p>
        <Button>123213</Button>
        <hr/>
        <About/>
      </span>
    )
  }
}
export default App;
// $(function(){
//   $('#app').html('')
// })