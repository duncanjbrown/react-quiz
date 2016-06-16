import React from 'react';
require('../stylesheets/answer.scss');

const Answer = ({ text, handleClick, questionWasAnswered, wasChosen, wasCorrect }) => {
    
    let classes = ["answer"];
    if(questionWasAnswered) {
        if(wasChosen) {
            classes.push("chosen");
        } if(wasCorrect) {
            classes.push("correct");
        } if(wasChosen && !wasCorrect) {
            classes.push("incorrect");
        }
    }

    return <li className={classes.join(" ")} onClick={handleClick}>{text}</li>
}

export default Answer;