import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { reducer } from './reducer';
import quizData from './data/quiz'
import Quiz from './components/quiz';

let store = createStore(reducer, quizData, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Quiz />
    </Provider>,
    document.getElementById('app')
);