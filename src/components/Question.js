import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions'
import Answer from './Answer';
require('../stylesheets/question.scss');

const Question = ({ question, dispatchAnswer }) => {    
    return (
        <li className="question quiz__question">
            <p className="question__question">{question.text}</p>
            <ul class="question__answers">
                {question.answers.map((a, i) => (
                    <Answer 
                        handleClick={() => dispatchAnswer(question.id, i)}
                        text={a.text} 
                        wasChosen={question.selectedAnswer == i}
                        wasCorrect={question.correctAnswer == i}
                        key={i} />
                ))}
            </ul>
        </li>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAnswer: (questionID, answerID) => {
            dispatch(actions.answerQuestion(questionID, answerID));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Question);