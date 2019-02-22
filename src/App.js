import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.scss';
import {main, teamHome} from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={main}/>
        <Route path="/teamHome/:name?" component={teamHome}/>
      </div>
    );
  }
}

export default App;
