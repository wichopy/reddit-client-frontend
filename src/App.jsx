import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Example from './ExampleAuto'
import RedditPosts from './RedditPosts'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      currentSubreddit: '',
      redditPosts: [],
      comments: [],
      nextCode: '',
      beforeCode: '',
      header: ''
    };    
  }

  fetchSubReddit = async newValue => {
    try {
      await fetch (
        `http://localhost:3001/${newValue}`
      ).then(response => response.json())
      .then(responseJson=> {
        console.log(responseJson)
        this.setState({redditPosts: responseJson.sr.data.children})
        this.setState({header: responseJson.srInfo.data.header_img})
        this.setState({currentSubreddit: newValue})
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  fetchNextPage = async (value,after) => {
    try {
      await fetch (
        `http://localhost:3001/${value}?after=${after}`
      )
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
    const { redditPosts, currentSubreddit, header } = this.state;
    return (
      <div className="App">
        <div className="jumbotron">
          {currentSubreddit ? <h1>{currentSubreddit}</h1> : <h1>Find your subreddit!</h1>}
          {header ? <img src={header} /> : null }
          <div className="reddit-search">
            SEARCH: <Example
              fetchSubReddit={this.fetchSubReddit}
            />
          </div>
        </div>
        <div className="container-fluid">
          <RedditPosts redditPosts={redditPosts}/>
        </div>
        {redditPosts.length > 0 ? <span><button>prev</button><button onClick={this.fetchNextPage}>next</button></span> : null}
      </div>
    );
  }
}

export default App;
