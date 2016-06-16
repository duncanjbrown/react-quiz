import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
require('../stylesheets/flash.scss');

const Flash = ({ flash }) => {
    return (
        <div className={"flash " + flash.status}>
            <h1>{flash.text}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { flash: state.flash };
}

export default connect(mapStateToProps)(Flash);