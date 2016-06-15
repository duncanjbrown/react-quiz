import React, { PropTypes } from 'react';
import Question from './Question';

const Quiz = ({questions, answerQuestion}) => (
    <div className="quiz">
        <h1>Quiz</h1>
        <ul>
            {questions.map((question, i) => (
                <Question question={question} answerQuestion={answerQuestion} key={i}  />
            ))}
        </ul>
    </div>
);

export default Quiz;