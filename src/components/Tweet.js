import React from 'react';

import Avatar from './Avatar';
import LikeButton from './LikeButton';
import Message from './Message';
import MoreOptionsButton from './MoreOptionsButton';
import NameWithHandle from './NameWithHandle';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import Time from './Time';

const Tweet = () => {
    return (
        <div>
            <p>Tweet Component</p>
            <Avatar />
            <NameWithHandle />
            <Time />
            <Message />
            <ReplyButton />
            <LikeButton />
            <RetweetButton />
            <MoreOptionsButton />
        </div>
    )
};

export default Tweet;
