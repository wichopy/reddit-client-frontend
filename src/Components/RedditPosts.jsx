import React from 'react';

const RedditPosts = props => {
    return (
        <div className="reddit-posts">
            {props.redditPosts
                .map(rp => {
                    const { id, created, title, thumbnail, permalink, score, num_comments, url } = rp.data
                    const dateString = new Date(created).toString()
                    return (
                        <div key={id}>
                            <div className=" card " >
                                <div className="row">
                                    <div className="col-md-3">
                                        {thumbnail !== "self" ? 
                                        <a href={url} target="_blank"><img src={thumbnail} alt="thumbnail" className="thumbnail" data-toggle="tooltip" title="Click me to open content in a new tab"/></a>
                                        : <a href={url} target="_blank">View post...</a>  }
                                    </div>
                                    <div className="col-md-9">
                                        <a onClick={()=> props.fetchComments(permalink) } href="!#" data-toggle="modal" data-target="#postContent"><h4 className="card-title"><b>{title}</b></h4></a>
                                        <h3 className="card-text">score: {score}</h3>
                                        <p className="card-text">comments: {num_comments}</p>
                                        <p className="card-text">posted: {dateString}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xs-12 whitespace-baby" ></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default RedditPosts;