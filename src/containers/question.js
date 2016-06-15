import { connect } from 'react-redux'
import Question from './../components/Question';

const QuizApp = connect(
  function mapStateToProps(state) {
    return { questions: state };
  }
)(Quiz);

export default QuizApp;