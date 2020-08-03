import React from 'react';

const ContentBlock = (props) => {
    return (
        <div id={props.id} className={`content-block ${props.color}`}>
            {props.children}
        </div>
    );
}

export default ContentBlock;