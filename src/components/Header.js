import React from 'react';

const Header =  (props) => {
    return (
        <div className="header">
              <h2>reddit 
                <span className="add"
                    onClick={(e) => {props.onTogglePostForm()}}> &#x271A;</span>
             </h2>  
        </div>
    );
}

export default Header;
