import React from 'react';
import moment from 'moment';
import Rating from './Rating';

const Post =   (props) => {
    const {post, onUpVote, onDownVote} = props;
    return (
        <div className="post" >
            <div className="post-rating">
                <Rating
                     post={post}
                     onUpVote={(e)=>{onUpVote(post.id)}}
                     onDownVote={(e)=>{onDownVote(post.id)}} />
            </div>
            <div className="post-body">
                <h3><a href={post.url} target="_blank">{post.title}</a></h3>
                <footer>
                    submitted {moment(post.createdOn, "YYYYMMDD").fromNow()} 
                    {" "} by {post.author}
                </footer>  
            </div> 
        </div>
    );
}
export default Post;