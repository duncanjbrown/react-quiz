export function reducer(state = [], action) {
  switch(action.type) {
    case 'ANSWER_QUESTION':
      return {
          ...state,
          questions: state.questions.map(q =>
            question(q, action)
          )
      }
    default:
      return state;
  }
}

export function question(question, action) {

  if(action.questionID !== question.id) {
    return question;
  }

  switch(action.type) {
    case 'ANSWER_QUESTION':
      
      if(question.answered) {
        return question;
      }

      const correct = question.correctAnswer == action.answerID;

      return {
        ...question,
        answered: true,
        correct: correct
      };
    default:
      return question;
  }
}
