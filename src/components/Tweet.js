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
                <Avatar hash={tweet.gravatar} />
            </div>
            <div className="right-tweetContents">
                <div className="right-top-tweetContents">
                    <NameWithHandle author={tweet.author} />
                    <Time time={tweet.timestamp} />
                </div>
                <div className="right-middle-tweetContents">
                    <Message text={tweet.message} />
                </div>
                <div className="right-bottom-tweetContents">
                    <ReplyButton />
                    <LikeButton count={tweet.likes} />
                    <RetweetButton count={tweet.retweets} />
                    <MoreOptionsButton />
                </div>
            </div>
        </div>
    )
};

export default Tweet;
