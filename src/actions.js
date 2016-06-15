export function answerQuestion(questionID, answerID) {
    return {
        type: 'ANSWER_QUESTION',
        payload: {
            questionID,
            answerID
        }
    }
}