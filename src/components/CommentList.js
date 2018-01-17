import React from 'react';
export default class CommentList extends React.Component {
    render() {
        var data = this.props.data;

        return (
            <div>
                <h3>Comments</h3>
                <button onClick={(e)=>{this.props.onShowPosts()}}>
                    back to posts
                </button>
                {JSON.stringify(data)}
            </div>
        );
    }
}