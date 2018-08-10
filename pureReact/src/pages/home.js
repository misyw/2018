import React from 'react';
import ReactDOM from 'react-dom';
import About from './about';
import $ from 'jquery';
class App extends React.PureComponent{
  render(){ 
    return(
      <span>
        <small id='app'>App6666</small>
        <hr/>
        <About />
      </span>
    )
  }
}
export default App;
// $(function(){
//   $('#app').html('')
// })