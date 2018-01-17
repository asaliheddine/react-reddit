import React from 'react';
import moment from 'moment';
import Post from './Post';
import CommentList from './CommentList';

const PostList =   (props) => {
    var {posts,comments,onShowComments} = props;
    var postUI = posts.map((post) => {
        return (
            <Post 
                onUpVote={props.onUpVote}
                onDownVote={props.onDownVote} 
                comments={comments}
                onShowComments={onShowComments}
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