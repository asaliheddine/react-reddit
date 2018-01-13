import React from 'react';

export default class Rating extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {onUpVote,onDownVote,post} = this.props;
        return (
            <div className="rating-icon">
                <div onClick={(e)=>{onUpVote()}} className="rating-up">&#x21E7;</div>
                    {post.votes}
                <div onClick={(e)=>{onDownVote()}} className="rating-down">&#x21E9;</div>
            </div>
        );
    }
}