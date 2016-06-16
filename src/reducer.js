export function reducer(state = [], action) {
  switch(action.type) {
    case 'QUESTION_ANSWERED':
      return {
        ...state,
        flash: {
          text: action.correct ? "Correct!" : "Incorrect!",
          status: action.correct ? "correct" : "incorrect"
        }
      }
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
      
      if(question.selectedAnswer) {
        return question;
      }

      return {
        ...question,
        selectedAnswer: action.answerID
      }
    default:
      return question;
  }
}
