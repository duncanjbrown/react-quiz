export const answerQuestion = (questionID, answerID) => (dispatch, getState) => {
    dispatch({
        type: 'ANSWER_QUESTION',
        questionID,
        answerID
    });

    const state = getState();
    const answeredQuestion = state.questions.find(q => q.id == questionID);

    dispatch({
        type: 'QUESTION_ANSWERED',
        correct: answeredQuestion.correct
    });
}