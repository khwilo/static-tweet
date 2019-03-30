import React from 'react';
import PropTypes from 'prop-types';

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
                <i className="fa fa-retweet" aria-hidden="true">
                    <Count count={count} />
                </i>
            </button>
        </div>
    );
};

RetweetButton.propTypes = {
    count: PropTypes.number
};
export default RetweetButton;
