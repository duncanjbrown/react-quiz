import React from 'react';
require('../stylesheets/answer.scss');

const Answer = ({ text, handleClick, wasChosen, wasCorrect }) => {
    
    let className = "answer";
    if(wasChosen && wasCorrect) {
        className += " chosen correct";
    } else if(wasChosen && !wasCorrect) {
        className += " chosen incorrect";
    }

    return <li className={className} onClick={handleClick}>{text}</li>
}

export default Answer;