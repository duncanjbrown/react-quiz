import React, { PropTypes } from 'react';
import Answer from './Answer';

const Question = ({question, answerQuestion}) => {
    //const onAnswer = id => event => answerQuestion(id, question.id);
    const onAnswer = (id) => () => console.log(id);

    return (
        <li className="question quiz__question"
            style={{
                textDecoration: question.get('answered') ? 'line-through' : 'none'
            }}>
            {question.get('text')}
            <ul class="question__answers">
                {question.get('answers').map((a, i) => (
                    <Answer
                        onClick={onAnswer} 
                        text={a.text} 
                        key={i} />
                ))}
            </ul>
        </li>
    );
}

export default Question;