import React, { Component } from 'react'
//import PropTypes from 'prop-types';

export class ActivityItem extends Component {

    render() {

        const {id, title, hours, minutes, seconds} = this.props.activity;

        return (
            <div>
                <p>
                    { title } {' '}
                    <button onClick={this.props.toggleCountdown.bind(this, id)}> Start / Stop</button>{' '}
                    {/* format the way time remaining is displayed */}
                    {hours}{':'}{minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes }{':'}
                    {seconds === 0 ? '00' : seconds < 10 ? '0' + seconds : seconds }
                    <button onClick={this.props.delActivity.bind(this, id)}style={delBtnStyle}>x</button>
                </p>
            </div>
        )
    }
}

// delete button style
const delBtnStyle = {
    background: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    //float: 'right'
}

export default ActivityItem
