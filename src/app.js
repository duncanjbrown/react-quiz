import React from 'react';

import ReactDOM from 'react-dom';

import { Quiz } from './quiz.js';

const questions = [
    { 
        id: 0, 
        text: "In which year did the Franco-Prussian war end?",
        answers: [
            {
                id: 0,
                text: "1871",
                correct: true 
            },
            {
                id: 0,
                text: "1901",
                correct: false
            },
            {
                id: 0,
                text: "1834",
                correct: false 
            },
        ]
    },
    { 
        id: 0, 
        text: "How many planets in the Solar System?",
        answers: [
            {
                id: 0,
                text: "9",
                correct: true 
            },
            {
                id: 0,
                text: "10",
                correct: false
            },
            {
                id: 0,
                text: "7",
                correct: false 
            },
        ]
    }
];

ReactDOM.render(
    <Quiz questions={questions} />,
    document.getElementById('app')
);