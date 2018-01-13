import React from 'react';
import moment from 'moment';

const Post =   ({post}) => {
    return (
        <div className="post" >
            <h3><a href={post.url} target="_blank">{post.title}</a></h3>
            <footer>
                submitted {moment(post.createdOn, "YYYYMMDD").fromNow()} 
                {" "} by {post.author}
            </footer>   
        </div>
    );
}
export default Post;