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
    return <React.Fragment>
       
        <div className="post-list">
            <h3>Users Posts</h3>
            {postUI}
        </div>
        <div className="post-list">{postUI}</div>
        <div className="post-list">{postUI}</div>
      </React.Fragment>;
}
export default PostList;