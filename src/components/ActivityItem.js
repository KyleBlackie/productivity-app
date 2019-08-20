import React, { Component } from 'react'
//import PropTypes from 'prop-types';

export class ActivityItem extends Component {

    getStyle = () => {
        return {
            display: "flex",
            background: "#A8DADC",
            padding: "10px",
            borderBottom: "1px #bbb solid",
            width: "100vw",
            // style for countdown
            color: "black"//this.props.activity.countdown ? 'green' : 'black'
        }
    };

    render() {

        const {id, title, hours, minutes, seconds} = this.props.activity;

        return (
            <div style={this.getStyle()}>
                <div style={{flex: "2"}}>
                { title }
                </div>
                <div style={{flex: "1", textAlign: "center", color: this.props.activity.countdown ? 'green' : 'black'}}>
                    <button onClick={this.props.toggleCountdown.bind(this, id)} style={{padding: "4px"}}> Start / Stop</button>{' '}
                    {/* format the way time remaining is displayed */}
                    {hours}{':'}{minutes === 0 ? '00' : minutes < 10 ? '0' + minutes : minutes }{':'}
                    {seconds === 0 ? '00' : seconds < 10 ? '0' + seconds : seconds }
                
                    <button onClick={this.props.delActivity.bind(this, id)}style={delBtnStyle}>x</button>
                </div>
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
    //borderRadius: '100%',
    cursor: 'pointer',
    float: 'right'
}




export default ActivityItem
