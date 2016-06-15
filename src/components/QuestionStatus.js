import React from 'react';

const QuestionStatus = ({ correct }) => {
    return <li>{correct ? "Correct!" : "Wrong!"}</li>
}

export default QuestionStatus;