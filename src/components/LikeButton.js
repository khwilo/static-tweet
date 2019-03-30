import React from 'react';

const LikeButton = ({ count }) => {
    return (
        <div>
            <button className="tweet-interact-btn">
                <i class="fa fa-heart-o" aria-hidden="true">
                    {
                        count > 0 && <span className="like-count">{count}</span>
                    }
                </i>
            </button>
        </div>
    );
};

export default LikeButton;
