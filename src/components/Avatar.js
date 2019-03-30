import React from 'react';

const Avatar = ({ hash }) => {
    const url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <div className="tweet-avatar-container">
            <img
                className = "tweet-avatar"
                src       = {url}
                alt       = "avatar"
            />
        </div>
    );
};

export default Avatar;
