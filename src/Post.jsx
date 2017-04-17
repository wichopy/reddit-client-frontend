import React from 'react'
import Comments from './Comments'

const Post = (props) => {
  return (
    <div className="modal fade" id="postContent" tabIndex="-1" role="dialog" aria-labelledby="modalLongTitle" aria-hidden="true">
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="modalLongTitle"><em>{props.title}</em> posted on <b>/r/{props.subreddit}</b> </h3>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <img src={props.url} className="content-img" alt="postcontent"/>

            <video>
              <source src={props.url} type="video/webm" />
            </video>
            {props.comments.map((comment)=> {
              return <Comments comment={comment.data} key={comment.data.id}/>
            })}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;