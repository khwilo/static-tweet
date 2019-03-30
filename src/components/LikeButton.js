import React from 'react';
import PropTypes from 'prop-types';

const LikeButton = ({ count }) => {
    return (
        <div>
            <button className="tweet-interact-btn">
                <i className="fa fa-heart-o" aria-hidden="true">
                    {
                        count > 0 && <span className="like-count">{count}</span>
                    }
                </i>
            </button>
        </div>
    );
};

LikeButton.propTypes = {
    count: PropTypes.number
};

export default LikeButton;
