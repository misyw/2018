import React from 'react';
import ReactDOM from 'react-dom';
import { _local } from '../common/util';

class About extends React.PureComponent{

  render(){
    return(
      <span >
        <p className={'color'}>这是about.js中的文字此处没有引入css</p>
        {`${_local}`}
      </span>
    )
  }
}

export default About;