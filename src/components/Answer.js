import React, { PropTypes } from 'react';

const Answer = ({ text, handleClick }) => {
    return <li className="question__answer" onClick={handleClick}>{text}</li>
}

export default Answer;