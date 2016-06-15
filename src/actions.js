const answerQuestion = (questionID, answerID) => {
    return {
        type: 'ANSWER_QUESTION',
        questionID,
        answerID
    }
}

export default answerQuestion;