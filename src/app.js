import React from 'react';
import ReactDOM from 'react-dom';
import { List, Map } from 'immutable';

import QuizApp from './containers/quiz';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducer';

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

let store = createStore(reducer, questions);



ReactDOM.render(
    <Provider store={store}>
        <QuizApp />
    </Provider>,
    document.getElementById('app')
);