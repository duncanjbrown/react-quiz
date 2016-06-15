import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import answerQuestion from './../actions'
import Answer from './Answer';

const Question = ({ question, dispatchAnswer }) => {    
    return (
        <li className="question quiz__question"
            style={{
                textDecoration: question.answered ? 'line-through' : 'none'
            }}>
            {question.text}
            <ul class="question__answers">
                {question.answers.map((a, i) => (
                    <Answer 
                        handleClick={() => dispatchAnswer(question.id, i)}
                        text={a.text} 
                        key={i} />
                ))}
            </ul>
        </li>
    );
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAnswer: (questionID, answerID) => {
            dispatch(answerQuestion(questionID, answerID));
        } 
    }   
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);