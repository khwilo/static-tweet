import React from 'react';

const Message = ({ text }) => {
    return (
        <div className="tweet-message">
            <p>{text}</p>
        </div>
    );
};

export default Message;
