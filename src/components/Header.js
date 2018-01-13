import React from 'react';

const Header =  (props) => {
    return (
        <div className="header">
              <h2>reddit 
                <span 
                    onClick={(e) => {props.onTogglePostForm()}}> &#x271A;</span>
             </h2>  
        </div>
    );
}

export default Header;
