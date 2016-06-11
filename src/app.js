import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from 'immutable';

import { Quiz } from './quiz.js';

const questions = List([
    Map({ 
        id: 0, 
        text: "In which year did the Franco-Prussian war end?",
        answers: [
            {
                text: "1871",
                correct: true 
            },
            {
                text: "1901",
                correct: false
            },
            {
                text: "1834",
                correct: false 
            },
        ]
    }),
    Map({ 
        id: 0, 
        text: "How many planets in the Solar System?",
        answers: [
            {
                text: "9",
                correct: true 
            },
            {
                text: "10",
                correct: false
            },
            {
                text: "7",
                correct: false 
            },
        ]
    })
]);



ReactDOM.render(
    <Quiz questions={questions} />,
    document.getElementById('app')
);