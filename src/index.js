import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tweet from './components/Tweet';

const testTweet = {
    message : "In JavaScript, recursion involves functions that call themselves repeatedly until they reach a base condition.",
    gravatar: "nothing",
    author  : {
        handle: "khwilo",
        name  : "Khwilo Kabaka"
    },
    likes    : 12,
    retweets : 20,
    timestamp: "2019-03-29 17:11:04"
};

ReactDOM.render(<Tweet tweet={testTweet} />, document.getElementById('root'));
