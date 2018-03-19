import React, { Component } from 'react'
import './App.css'
import { HashRouter as Router, Switch ,Route} from 'react-router-dom';
import Home from './container/Home.js';
import About from './container/About.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/About" component={About}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
