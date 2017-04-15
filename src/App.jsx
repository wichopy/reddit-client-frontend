import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './ExampleAuto'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      redditPosts: []
    };    
  }
  fetchSubReddit = async newValue => {
    try {
      const subredditData = await fetch (
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
  render() {
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
          <div className="reddit-posts">
            {this.state.redditPosts
              .map(rp => {
                const { id, created, title, thumbnail, permalink, score, num_comments } = rp.data
                return (
                  <div className="card" key={id}>
                    <img src={thumbnail} width="100"/>
                    <h6><a href={permalink}>{title}</a></h6>
                    <ul>
                      <li>posted: {created}</li>
                      <li>score: {score}</li>
                      <li>comments: {num_comments}</li>
                    </ul>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
