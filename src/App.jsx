import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import AutoSuggestion from './Components/AutoSuggestion'
import RedditPosts from './Components/RedditPosts'
import Post from './Components/Post'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubreddit: '',
      redditPosts: [],
      comments: [],
      currentPost: [],
      nextCode: '',
      header: '',
      subredditNull: null,
    };    
  }

  fetchSubReddit = async newValue => {
    try {
      await fetch (
        `http://localhost:3001/${newValue}`
      ).then(response => response.json())
      .then(responseJson=> {
        const { children, after } = responseJson.sr.data;
        const {display_name, header_img }= responseJson.srInfo.data;
        if (children.length === 0 && !after) { this.setState({subredditNull: 0}) } else { this.setState({subredditNull: 1}) }
        this.setState({redditPosts: children})
        this.setState({nextCode: after })
        this.setState({header: header_img})
        this.setState({currentSubreddit: display_name})
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  fetchNextPage = async () => {
    try {
      await fetch (
        `http://localhost:3001/${this.state.currentSubreddit}/after/${this.state.nextCode}`
      ).then(response => response.json())
      .then(responseJson => {
        const { children, after } = responseJson.sr.data;
        let { redditPosts } = this.state;
        this.setState({nextCode: after })
        this.setState({redditPosts: redditPosts.concat(children)})
      })
    }
    catch (error) {
      console.error(error)
    }
  }

  fetchComments = async permalink => {
    try {
      await fetch (
        'http://localhost:3001/posts', {
          method: 'POST',
          mode: 'cors',
          headers:{
            // 'Access-Control-Allow-Origin': '*',
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          body: `permalink=${permalink}`
        }
      ).then(response => response.json())
      .then(responseJson=> {
        this.setState({comments: responseJson[1].data.children})
        this.setState({currentPost: responseJson[0].data.children[0].data})
      })
    }
    catch (error) {
      console.error(error)
    }
  }
 
  render() {
    const { redditPosts, currentSubreddit, header, subredditNull, comments }  = this.state;
    const {title, url, selftext_html, thumbnail } = this.state.currentPost
    return (
      <div className="App">
        <div className="jumbotron">
          {
            currentSubreddit ? 
            <h1 className="title-subreddit">/r/{currentSubreddit}</h1> : 
            <h1>Find your subreddit!</h1>}
            {header ? <img src={header} alt="header"/> : null 
          }
          <div className="reddit-search">
            SEARCH: <AutoSuggestion
              fetchSubReddit={this.fetchSubReddit}
            />
          </div>
        </div>
        <Post subreddit={currentSubreddit} title={title} url={url} comments={comments} selftext_html={selftext_html} thumbnail={thumbnail} />
        <div className="container">
          {subredditNull === 0 ? "WHOOPS, THAT REDDIT DONT EXIT" : null}
          <RedditPosts 
            redditPosts={redditPosts}
            fetchComments={this.fetchComments}
          />
        </div>
        {
          redditPosts.length > 0 ? 
          <button className="btn btn-primary" onClick={this.fetchNextPage}>Load More</button>
          : null
        }
      </div>
    );
  }
}

export default App;
