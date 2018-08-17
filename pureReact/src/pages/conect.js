import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader'


class Conect extends React.PureComponent{

  componentWillMount(){
    console.log(this.props)
  }
  
  render(){
    console.log(this.props)
    return(
      <span >
        <p className={'color'}>conect.js中的文字此处没有引入css</p>
      </span>
    )
  }
}

export default hot(module)(Conect);// hot(module)(Conect)