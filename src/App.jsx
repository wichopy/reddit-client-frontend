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
      header: '',
      pageNum: 0,
      subredditNull: null,
    };    
  }

  fetchSubReddit = async newValue => {
    try {
      await fetch (
        `http://localhost:3001/${newValue}`
      ).then(response => response.json())
      .then(responseJson=> {
        // console.log(responseJson)
        const { children, after, before } = responseJson.sr.data;
        const {display_name, header_img }= responseJson.srInfo.data;
        // console.log(responseJson.sr)
        console.log(responseJson.sr)
        console.log(`found new subreddit. before code: ${before}, after code: ${after}`)
        if (children.length === 0 && !after) { this.setState({subredditNull: 0}) } else { this.setState({subredditNull: 1}) }
        this.setState({redditPosts: children})
        this.setState({value: display_name})
        this.setState({nextCode: after })
        this.setState({beforeCode: before })
        this.setState({header: responseJson.srInfo.data.header_img})
        this.setState({currentSubreddit: newValue})
        this.setState({pageNum: 1})
      })
    }
    catch (error) {
      console.log(error)
    }
  }

  fetchNextPage = async () => {
    try {
      console.log('call to next page with after code:',this.state.nextCode)
      await fetch (
        `http://localhost:3001/${this.state.currentSubreddit}/after/${this.state.nextCode}`
      ).then(response => response.json())
      .then(responseJson => {
        const { children, after, before } = responseJson.sr.data;
        // console.log(responseJson.sr)
        console.log(`next page pressed. new before code: ${before}, after code: ${after}`)
        let { pageNum,redditPosts } = this.state;
        this.setState({nextCode: after })
        this.setState({beforeCode: before })
        this.setState({redditPosts: redditPosts.concat(children)})
        this.setState({pageNum: pageNum+=1})
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
    const { redditPosts, currentSubreddit, header, subredditNull }  = this.state;
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
          {subredditNull === 0 ? "WHOOPS, THAT REDDIT DONT EXIT" : null}
          <RedditPosts redditPosts={redditPosts}/>
        </div>
        {redditPosts.length > 0 ? 
            <button onClick={this.fetchNextPage}>Load More</button>
          : null
        }
      </div>
    );
  }
}

export default App;
