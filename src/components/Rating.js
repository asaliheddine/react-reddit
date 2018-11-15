import React from 'react';

export default class Rating extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        const {onUpVote,onDownVote,post} = this.props;
        return <React.Fragment>
            <div onClick={e => {
                onUpVote();
              }} className="rating-up">
              &#x21E7;
            </div>
            <div className="rating-no"> {post.votes}</div>
            <div onClick={e => {
                onDownVote();
              }} className="rating-down">
              &#x21E9;
            </div>
            {/* <div className="rating-icon">
            </div> */}
          </React.Fragment>;
    }
}