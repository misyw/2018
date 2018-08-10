import React from 'react';
import ReactDOM from 'react-dom';
import { _local } from '../common/util';

class About extends React.PureComponent{

  render(){
    return(
      <span>{`${_local}`}</span>
    )
  }
}

export default About;