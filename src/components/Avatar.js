import React from 'react';
import PropTypes from 'prop-types';

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

Avatar.propTypes = {
    hash: PropTypes.string.isRequired
};

export default Avatar;
