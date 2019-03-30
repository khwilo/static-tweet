import React from 'react';

import Avatar from './Avatar';
import LikeButton from './LikeButton';
import Message from './Message';
import MoreOptionsButton from './MoreOptionsButton';
import NameWithHandle from './NameWithHandle';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import Time from './Time';

const Tweet = ({ tweet }) => {
    return (
        <div className="main">
            <div className="left-tweetContents">
                <Avatar />
            </div>
            <div className="right-tweetContents">
                <div className="right-top-tweetContents">
                    <NameWithHandle />
                    <Time />
                </div>
                <div className="right-middle-tweetContents">
                    <Message />
                </div>
                <div className="right-bottom-tweetContents">
                    <ReplyButton />
                    <LikeButton />
                    <RetweetButton />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
};

export default Tweet;
