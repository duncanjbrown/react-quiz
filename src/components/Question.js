import React from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions'
import Answer from './Answer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../stylesheets/question.scss');

const Question = ({ question, questionNumber, questionCount, dispatchAnswer }) => {    
    return (
        <li className="question quiz__question">
            <h2>Question {questionNumber} of {questionCount}</h2>
            <p className="question__question">{question.text}</p>
            <ul class="question__answers">
                {question.answers.map((a, i) => (
                    <Answer 
                        handleClick={() => dispatchAnswer(question.id, i)}
                        text={a.text} 
                        questionWasAnswered={question.answered}
                        wasChosen={question.selectedAnswer == i}
                        wasCorrect={question.correctAnswer == i}
                        key={i} />
                ))}
            </ul>
            <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                {question.answered ? <p className="question__explanation">{question.explanation}</p> : null}
            </ReactCSSTransitionGroup>

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