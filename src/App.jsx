import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './ExampleAuto'
import RedditPosts from './RedditPosts'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      redditPosts: [],
      comments: []
    };    
  }

  fetchSubReddit = async newValue => {
    try {
      await fetch (
        `http://localhost:3001/${newValue}`
      ).then(response => response.json())
      .then(responseJson=> {
        console.log(responseJson)
        this.setState({redditPosts: responseJson.data.children})
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  fetchComments = async permalink => {
    try {
      await fetch (
        `http://localhost:3001/post/${permalink}`
      ).then(response => response.json())
      .then(responseJson=> {
        console.log(responseJson)
        this.setState({comments: responseJson})
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  render() {
    const { redditPosts } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Reddit</h2>
        </div>
        <div className="container-fluid">
          <div className="reddit-search">
            SEARCH: <Example
              fetchSubReddit={this.fetchSubReddit}
            />
          </div>
          <RedditPosts redditPosts={redditPosts}/>
        </div>
      </div>
    );
  }
}

export default App;
