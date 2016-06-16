import quizData from './data/quiz';

export function reducer(state = [], action) {
  switch(action.type) {
    case 'RESTART':
      return quizData;
    case 'FLASH':
      return {
        ...state,
        flash: {
          text: action.correct ? "✓ Correct!" : "✗ Incorrect!",
          status: action.correct ? "correct" : "incorrect"
        }
      }
    case 'CLOSE_FLASH':
      return {
        ...state,
        flash: Object.assign({}, state.flash, {status: state.flash.status + " fade"})
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
      
      if(question.answered) {
        return question;
      }

      return {
        ...question,
        answered: true,
        selectedAnswer: action.answerID
      }
    default:
      return question;
  }
}
