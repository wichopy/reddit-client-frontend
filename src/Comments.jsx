import React from 'react';
const HtmlToReactParser = require('html-to-react').Parser;
const htmlToReactParser = new HtmlToReactParser();

const Comments = props => {
  return (
    <div className="card comment">
      {htmlToReactParser.parse(htmlToReactParser.parse(props.comment.body_html))}
      <span>
        posted by: {props.comment.author} |
          score: <b>{props.comment.score}</b> | <a data-toggle="collapse" data-target={'#'+props.comment.id} href="!#">replies 
          ({props.comment.replies ? props.comment.replies.data.children.length : 0})</a>
      </span>
      <div id={props.comment.id} className="collapse">
        {props.comment.replies ? props.comment.replies.data.children.map((reply)=> {
          return (
              <Comments comment={reply.data} key={reply.data.id} />
          )
        }) : null}
      </div>
    </div>
  )
}

export default Comments;