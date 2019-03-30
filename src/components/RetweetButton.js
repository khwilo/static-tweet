import React from 'react';

const Count = ({ count }) => {
    if (count > 0) {
        return (
            <span className="retweet-count">
                {count}
            </span>
        );
    } else {
        return null;
    }
};

const RetweetButton = ({ count }) => {
    return (
        <div>
            <button className="tweet-interact-btn">
                <i class="fa fa-retweet" aria-hidden="true">
                    <Count count={count} />
                </i>
            </button>
        </div>
    );
};

export default RetweetButton;
