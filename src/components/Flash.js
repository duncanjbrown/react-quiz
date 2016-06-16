import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Flash = ({ flash }) => {
    return (
        <div className="flash {flash.status}">
            {flash.text}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { flash: state.flash };
}

export default connect(mapStateToProps)(Flash);