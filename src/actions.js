export const answerQuestion = (questionID, answerID) => (dispatch, getState) => {
    dispatch({
        type: 'ANSWER_QUESTION',
        questionID,
        answerID
    });

    const state = getState();
    const answeredQuestion = state.questions.find(q => q.id == questionID);

    dispatch({
        type: 'FLASH',
        correct: answeredQuestion.selectedAnswer == answeredQuestion.correctAnswer
    });

    setTimeout(() => {
        dispatch({type: 'CLOSE_FLASH'})
    }, 500);
}