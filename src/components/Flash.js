import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Flash = ({ status }) => (
    <div className="flash {status}">
        {status}
    </div>
)

const mapStateToProps = (state) => {
    return { questions: state.questions };
}

export default connect(mapStateToProps)(Quiz);