import { connect } from 'react-redux'
import Quiz from './../components/Quiz';

const QuizApp = connect(
  function mapStateToProps(state) {
    return { questions: state };
  }
)(Quiz);

export default QuizApp;