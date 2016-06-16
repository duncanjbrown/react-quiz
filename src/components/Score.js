import React from 'react';
import { connect } from 'react-redux';

const Score = ({ score, questionCount }) => (
    <p>You scored {score} out of {questionCount}</p>
)

const mapStateToProps = (state) => {
    const score = state.questions.filter(q =>
        q.selectedAnswer == q.correctAnswer
    ).length;
    const questionCount = state.questions.length; 
    console.log(score, questionCount);
    return { score, questionCount };
}

export default connect(mapStateToProps)(Score);