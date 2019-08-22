import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Reset extends Component {
    render() {
        return (
            <div style={resetStyle}>
                <button onClick={this.props.resetActivities} style={resetBtnStyle}> Reset Timers</button>
            </div>
        )
    }
}

// styling

const resetStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: '#788',
    borderTop: '2px #000 solid',
    borderBottom: '1px #000 dashed'
}

const resetBtnStyle = {
    padding: '5px 10px',
    border: 'none',
    //cursor: 'pointer'
}

// prop types
Reset.propTypes = {
    resetActivities: PropTypes.func.isRequired
}

export default Reset
