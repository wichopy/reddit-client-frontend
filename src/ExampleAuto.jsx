import Autosuggest from 'react-autosuggest';
import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      posts: []
    };
  }

// Teach Autosuggest how to calculate suggestions for any given input value.
  getSuggestions = async value => {
    try {
      const suggestionRes = await fetch(
        'http://localhost:3001/search_reddit_names', {
          method: 'POST',
          mode: 'cors',
          headers:{
            // 'Access-Control-Allow-Origin': '*',
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
          },
          body: `query=${value}`
        }
      ).then((response) => response.json())
      .then((responseJson) => {
        return responseJson.names;
      });
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      inputLength === 0 ? this.setState({suggestions: []}) : this.setState({suggestions: suggestionRes});
    }
    catch (error) {
      console.error(error);
    }
  };
  // When suggestion is clicked, Autosuggest needs to populate the input element
  // based on the clicked suggestion. Teach Autosuggest how to calculate the
  // input value for every given suggestion.
  getSuggestionValue = suggestion => suggestion;

  // Use your imagination to render suggestions.
  renderSuggestion = suggestion => (
    <span>
      {suggestion}
    </span>
  );
  onChange = (event, { newValue, method }) => {
    console.log(method)
    // console.log(this.props.fetchSubReddit(newValue));
    method === ('click' || 'enter' ) ? this.props.fetchSubReddit(newValue) : null
    this.setState({
      value: newValue
    });
  };

  onKeyPress = (event) => {
    // console.log(event.key)
    event.key === 'Enter' ? this.props.fetchSubReddit(this.state.value) : null
    // console.log(value)
    // method === 'click' ? this.props.fetchSubReddit(newValue) : null
    // // console.log(this.props.fetchSubReddit(newValue));
    // this.setState({
    //   value: newValue
    // });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.getSuggestions(value)
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input element.
    const inputProps = {
      placeholder: 'Search for your subreddit',
      value,
      onChange: this.onChange,
      onKeyPress: this.onKeyPress
    };

    // Finally, render it!
    return (
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default Example;