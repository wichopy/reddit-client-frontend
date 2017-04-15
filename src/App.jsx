import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './ExampleAuto'

class App extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Reddit</h2>
        </div>
        <div className="reddit-search">
        <Example />
        </div>
      </div>
    );
  }
}

export default App;
