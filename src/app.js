import React from 'react';
import ReactDOM from 'react-dom';

import Quiz from './components/quiz';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducer';

const questions = [
    { 
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
    },
    { 
        id: 1, 
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
    }
];

let store = createStore(reducer, questions);

ReactDOM.render(
    <Provider store={store}>
        <Quiz />
    </Provider>,
    document.getElementById('app')
);