import React from 'react';
import PropTypes from 'prop-types';

const NameWithHandle = ({ author }) => {
    const { name, handle } = author;
    return (
        <div className="tweet-name">
            <p>
                <span className="name">{name}</span>
                <span className="handle">@{handle}</span></p>
        </div>
    );
};

NameWithHandle.propTypes = {
    author: PropTypes.shape({
        name  : PropTypes.string.isRequired,
        handle: PropTypes.string.isRequired
    }).isRequired
};

export default NameWithHandle;
