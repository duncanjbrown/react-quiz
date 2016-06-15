import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

const Quiz = ({ questions }) => (
    <div className="quiz">
        <h1>Quiz</h1>
        <ul>
            {questions.map((question, i) => (
                <Question question={question} key={i}  />
            ))}
        </ul>
    </div>
)

const mapStateToProps = (state) => {
    return { questions: state.questions };
}

export default connect(mapStateToProps)(Quiz);