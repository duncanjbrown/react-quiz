import React from 'react';

const QuestionStatus = ({ correct }) => {
    return <p>{correct ? "Correct!" : "Wrong!"}</p>
}

export default QuestionStatus;