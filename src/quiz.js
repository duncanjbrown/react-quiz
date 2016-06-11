import React from 'react';

export const Quiz = ({questions}) => {
    return (
        <div className="quiz">
            <h1>Quiz</h1>
            <ul>
                {questions.map( (q, i) => (
                    <Question data={q} key={i}  />
                ))}
            </ul>
        </div>
    );
}

export const Question = ({data}) => {
    return (
        <li className="question quiz__question">
            {data.get('text')}
            <ul class="question__answers">
                {data.get('answers').map( (a, i) => (
                    <Answer data={a} key={i} />
                ))}
            </ul>
        </li>
    )
}

export const Answer = ({data}) => {
    return (        
        <li className="question__answer">{data.text}</li>
    )
}

