import React from 'react';
import moment from 'moment';
import Rating from './Rating';

const Post =   (props) => {
    const {post, onUpVote, onDownVote, comments, onShowComments} = props;
    return <div className="post">
        <div className="post-rating">
          <Rating post={post} onUpVote={e => {
              onUpVote(post.id);
            }} onDownVote={e => {
              onDownVote(post.id);
            }} />
        </div>
        <div className="post-body">
          <h3>
            <a href={post.url} target="_blank">
              {post.title}
            </a>
          </h3>
          <footer>
            <div>
              <small>
                {" "}
                Submitted <strong>
                  {moment(post.createdOn, "YYYYMMDD").fromNow()}{" "}
                </strong> by <span className="post_author">{post.author}</span>
              </small>
            </div>
            <div>
                    <a className="comments-link"  href={`/comments/${post.id}`} onClick={e => {
                  onShowComments(e, post.id);
                }}>
                {comments.length} comments
              </a>
            </div>
          </footer>
        </div>
      </div>;
}
export default Post;