import React from 'react';
import { connect } from 'react-redux';
import answerQuestion from './../actions'
import Answer from './Answer';
import QuestionStatus from './QuestionStatus';

const Question = ({ question, dispatchAnswer }) => {    
    return (
        <li className="question quiz__question">
            <span style={{
                textDecoration: question.answered ? 'line-through' : 'none'
            }}>{question.text}</span>
            <ul class="question__answers">
                {question.answers.map((a, i) => (
                    <Answer 
                        handleClick={() => dispatchAnswer(question.id, i)}
                        text={a.text} 
                        key={i} />
                ))}
            </ul>
            {question.answered ? <QuestionStatus correct={question.correct} /> : null}
        </li>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAnswer: (questionID, answerID) => {
            dispatch(answerQuestion(questionID, answerID));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(Question);