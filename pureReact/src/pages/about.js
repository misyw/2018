import React from 'react';
import ReactDOM from 'react-dom';
import { _local } from '../common/util';

class About extends React.PureComponent{

  render(){
    return(
      <span >
        <p className={'color'}>这是123about.js中的文字此处没有引入css32</p>
        {`${_local}`}
      </span>
    )
  }
}

export default About;