import React from 'react';
import moment from 'moment';
import Post from './Post';

const PostList =   (props) => {
    var posts = props.posts;
    var postUI = posts.map((post) => {
        return (
            <Post 
                onUpVote={props.onUpVote}
                onDownVote={props.onDownVote} 
                key={post.id} post = {post} />
        );
    })
    return (
        <div className="post-list">
            {postUI}
        </div>
    );
}
export default PostList;