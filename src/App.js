import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'App': {
    'textAlign': 'center'
  },
  'App-logo': {
    'animation': 'App-logo-spin infinite 20s linear',
    'height': [{ 'unit': 'px', 'value': 80 }]
  },
  'title-subreddit': {
    'fontSize': [{ 'unit': 'px', 'value': 100 }]
  },
  'whitespace-baby': {
    'height': [{ 'unit': 'px', 'value': 10 }]
  },
  'thumbnail': {
    'borderRadius': '15px',
    'margin': [{ 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.3 }, { 'unit': 'em', 'value': 0.3 }]
  },
  'thumbnail:hover': {
    'opacity': '.6'
  },
  'App-header': {
    'backgroundColor': '#222',
    'height': [{ 'unit': 'px', 'value': 150 }],
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'color': 'white'
  },
  'App-intro': {
    'fontSize': [{ 'unit': 'string', 'value': 'large' }]
  },
  'body': {
    'fontFamily': 'Helvetica, sans-serif'
  },
  'react-autosuggest__container': {
    'position': 'relative'
  },
  'react-autosuggest__input': {
    'width': [{ 'unit': 'px', 'value': 280 }],
    'height': [{ 'unit': 'px', 'value': 30 }],
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }],
    'fontFamily': 'Helvetica, sans-serif',
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaa' }],
    'borderRadius': '4px'
  },
  'react-autosuggest__input--focused': {
    'outline': 'none'
  },
  'react-autosuggest__input--open': {
    'borderBottomLeftRadius': '0',
    'borderBottomRightRadius': '0'
  },
  'react-autosuggest__suggestions-container': {
    'display': 'none'
  },
  'react-autosuggest__suggestions-container--open': {
    'marginLeft': [{ 'unit': '%H', 'value': 0.384 }],
    'display': 'block',
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 280 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#aaa' }],
    'backgroundColor': '#fff',
    'fontFamily': 'Helvetica, sans-serif',
    'fontWeight': '300',
    'fontSize': [{ 'unit': 'px', 'value': 16 }],
    'borderBottomLeftRadius': '4px',
    'borderBottomRightRadius': '4px',
    'zIndex': '2'
  },
  'react-autosuggest__suggestions-list': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyleType': 'none'
  },
  'react-autosuggest__suggestion': {
    'cursor': 'pointer',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 20 }]
  },
  'react-autosuggest__suggestion--highlighted': {
    'backgroundColor': '#ddd'
  }
});
