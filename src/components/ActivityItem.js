import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ActivityItem extends Component {

    render() {

        const {id, title, hours, minutes, seconds} = this.props.activity;

        return (
                <div style={itemStyle}>
                    <div style={{flex:'3'}}>{ title }</div>
                    <div style={{flex:'1', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    <button onClick={this.props.toggleCountdown.bind(this, id)} style={{padding: "4px"}}> Start / Stop</button>{' '}
                    {/* format the way time remaining is displayed */}
                    <div style={{color: this.props.activity.countdown ? 'green' : 'black'}}>
                        {hours}{':'}{minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes }{':'}
                        {seconds === 0 ? '00' : seconds < 10 ? '0' + seconds : seconds }
                    </div>
                    <button onClick={this.props.delActivity.bind(this, id)}style={delBtnStyle}>x</button>
                    </div>
                </div>
        )
    }
}

const itemStyle = {
    display: "flex",
    justifyContent: 'space-between',
    alignItems: 'center',
    background: "#A8DADC",
    padding: "10px",
    borderBottom: "1px #bbb solid",
    width: "100vw",
    color: "black"
}

// delete button style
const delBtnStyle = {
    background: '#f00',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    //borderRadius: '100%',
    marginLeft: '5px',
    cursor: 'pointer',
}

// prop types
ActivityItem.propTypes = {
    activity: PropTypes.object.isRequired,
    delActivity: PropTypes.func.isRequired,
    toggleCountdown: PropTypes.func.isRequired
}




export default ActivityItem
