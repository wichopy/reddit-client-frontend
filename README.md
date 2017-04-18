# Reddit Frontend for ClueP Dev Challenge

## Requirements: 
Develop a simple Reddit client web UI.

The Index page should have a simple but efficient AutoComplete box which takes you to the appropriate subreddit, you must handle the case when the subreddit doesn’t exist.

Each Subreddit page should have at least the following
Jumbotron displaying the subreddit and Banner (if it exists)
A max of 25 posts with the ability to load 25 more by click on a “Load More” button.
Each Post must have a title, link to post, and a pic (if it exists)
Each Post page should have at least the following
Jumbotron displaying the subreddit
Title of post and post content
and all comments in whatever manner you may like

## Approach:
Initialized app using Facebook's create-react-app cli tool.
Use fetch calls to backend to update state.
Autocomplete by posting partial search queries to Reddit's search_reddit_names route and using npm library `react-autosuggest`
Utilized bootstrap collapse for comment tree and 

## Local Installation:

1. run `git clone git@github.com:wichopy/reddit-client-frontend.git` at your desired location to lcone repo.
2. `npm i` to get dependancies
3. `npm start` to run react-scripts and the app will be accessible on `localhost:3000`


Note: 
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
