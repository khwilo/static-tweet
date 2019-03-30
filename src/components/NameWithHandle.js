import React from 'react';

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

export default NameWithHandle;
