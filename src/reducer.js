import { List, Map } from 'immutable';

const emptyList = List([]);
const emptyMap = Map([]);

export function reducer(state = emptyList, action) {
  switch(action.type) {
    case 'ANSWER_QUESTION':
      return state.map(q =>
        question(q, action)
      );
    default:
      return state;
  }
} 

export function question(state, action) {
  switch(action.type) {
    case 'ANSWER_QUESTION':
      if(action.questionID !== state.id) {
        return state;
      }

      let answer = state.answers[action.answerID]; 

      return {
        ...state,
        answered: true,
        correct: answer.correct
      };
    default:
      return state;
  }
}