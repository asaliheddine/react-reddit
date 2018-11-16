import React from 'react';
export default class CommentList extends React.Component {


    constructor(props) {
        super(props);
    }



    render() {
        var data = this.props.data;
        let commentList = data.map((comment) => {
            return <React.Fragment>
                <div className="comment">
                  <div>
                    <span className="title">{comment.title}</span>

                    <div className="details">
                      <p>
                        {comment.body} {comment.body}
                        {comment.body} {comment.body}
                        {comment.body}
                        {comment.body} {comment.body}
                                {comment.body}{comment.body} {comment.body}{comment.body}
                        {comment.body}
                      </p>
                    </div>
                    <div className="author">
                      By <span className="author-name">
                        {comment.author}
                      </span>
                      <span className="comment-time">
                        7 min ago
                      </span>
                    </div>
                  </div>
                </div>
              </React.Fragment>;
        });

        return <React.Fragment>
            {/* {JSON.stringify(data)} */}
            <div>
              <div className="comment-list">
                <h3>
                  {" "}
                  <span className="comment-heading">Comments</span>
                  <a className="back-link" onClick={e => {
                      this.props.onShowPosts();
                    }}>
                    {" "}
                    &#x2190; go back
                  </a>
                </h3>

                {commentList}
              </div>
            </div>
          </React.Fragment>;
    }
}