import React from 'react';

const RedditPosts = props => {
    console.log(props)
    return (
        <div className="reddit-posts">
            {props.redditPosts
                .map(rp => {
                const { id, created, title, thumbnail, permalink, score, num_comments } = rp.data
                const dateString = new Date(created).toString()
                return (
                    <div className="container-fluid card" key={id}>
                        <div className="row">
                            <div className="col-sm-3">
                                <img src={thumbnail} />
                            </div>
                            <div className="col-sm-9">
                                <h6><a><b>{title}</b></a></h6>
                                    posted: {dateString}
                                    <h3>score: {score}</h3>
                                    comments: {num_comments}
                            </div>
                        </div>
                    </div>
                )
                })
            }
        </div>
    )
}

export default RedditPosts;