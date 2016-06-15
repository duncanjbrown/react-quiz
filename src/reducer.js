export function reducer(state = [], action) {
  switch(action.type) {
    case 'ANSWER_QUESTION':
      return state.map(q =>
        question(q, action)
      );
    default:
      return state;
  }
} 

export function question(question, action) {
  switch(action.type) {
    case 'ANSWER_QUESTION':
      if(action.questionID !== question.id) {
        return question;
      }

      if(question.answered) {
        return question;
      }

      let answer = question.answers[action.answerID];

      return {
        ...question,
        answered: true,
        correct: answer.correct
      };
    default:
      return question;
  }
}
