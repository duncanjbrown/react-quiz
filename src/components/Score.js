import React from 'react';
import { connect } from 'react-redux';

const Score = ({ score, questionCount, restartQuiz }) => (
    <div className="score">
        <p>You scored {score} out of {questionCount}</p>
        <button onClick={restartQuiz}>Restart</button>
    </div>
)

const mapStateToProps = (state) => {
    const score = state.questions.filter(q =>
        q.selectedAnswer == q.correctAnswer
    ).length;
    const questionCount = state.questions.length; 
    return { score, questionCount };
}


const mapDispatchToProps = (dispatch) => {
    return {
        restartQuiz: () => {
            dispatch({type: 'RESTART'});
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Score);