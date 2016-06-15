import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './reducer';
import quizData from './data/questions'
import Quiz from './components/quiz';

let store = createStore(reducer, quizData);

ReactDOM.render(
    <Provider store={store}>
        <Quiz />
    </Provider>,
    document.getElementById('app')
);