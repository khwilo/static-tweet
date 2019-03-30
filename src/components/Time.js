import React from 'react';
import moment from 'moment';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <div className="tweet-time">
            <p>{timeString}</p>
        </div>
    )
};

export default Time;
