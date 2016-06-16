export const answerQuestion = (questionID, answerID) => {
    return {
        type: 'ANSWER_QUESTION',
        questionID,
        answerID
    }
}

export const questionAnswered = (questionID) => {
    return {
        type: 'QUESTION_ANSWERED',
        questionID
    }
}
