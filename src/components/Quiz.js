import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Flash from './Flash';
require('../stylesheets/base.scss');

const Quiz = ({ questions, flash }) => (
    <div className="quiz">
        {flash ? <Flash /> : null}
        <h1>Quiz</h1>
        <ul>
            {questions.map((question, i) => (
                <Question question={question} key={i}  />
            ))}
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return { questions: state.questions, flash: state.flash };
}

export default connect(mapStateToProps)(Quiz);