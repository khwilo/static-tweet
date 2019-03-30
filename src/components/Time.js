import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
        <div className="tweet-time">
            <p>{timeString}</p>
        </div>
    )
};

Time.propTypes = {
    time: PropTypes.string
};

export default Time;
