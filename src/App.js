import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Autosuggest} from 'react-autosuggest';
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
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Example />
      </div>
    );
  }
}

export default App;
