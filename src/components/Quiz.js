import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Score from './Score';
import Flash from './Flash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../stylesheets/base.scss');
require('../stylesheets/transition.scss');

const Quiz = ({ questions, questionCount, flash, completed }) => (
    <div className="quiz">
        {flash ? <Flash /> : null}
        <h1>Quiz</h1>
        <ul>
            <ReactCSSTransitionGroup 
                transitionName="example" 
                transitionEnterTimeout={500} 
                transitionLeaveTimeout={300}>
                {questions.map((question, i) => (
                    <Question   question={question} 
                                questionNumber={i+1} 
                                questionCount={questionCount} 
                                key={i}  />
                ))}
            </ReactCSSTransitionGroup>
        </ul>
        {completed ? <Score /> : null}
    </div>
)

const mapStateToProps = (state) => {
    let questions = state.questions.filter(q => q.answered);
    const nextQuestion = state.questions[questions.length];
    if(nextQuestion) {
        questions = questions.concat(nextQuestion); 
    } 
    return { questions: questions, questionCount: state.questions.length, flash: state.flash, completed: !nextQuestion };
}

export default connect(mapStateToProps)(Quiz);