import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddActivity extends Component {
    
    state = {
        title: '',
        hours: 0,
        minutes: 0
    }

    //create an activity when submitted
    onSubmit = (e) => {
        e.preventDefault();
        //pass state to new activity
        this.props.addActivity(this.state.title, this.state.hours, this.state.minutes);
        this.setState({
            title: '',
            hours: 0,
            minutes: 0
        });
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    //change values for duration of activity to be added
    
    increaseHours = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return{hours: state.hours + 1};
        });
    }

    decreaseHours = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return state.hours === 0 ? {hours: 0} : {hours: state.hours - 1};
        });
    }

    increaseMinutes = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return state.minutes === 55 ? {minutes: 0} : {minutes: state.minutes + 5};
        });
    }

    decreaseMinutes = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return state.minutes === 0 ? {minutes: 0} : {minutes: state.minutes - 5};
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={formStyle}>
                <input
                    type='text'
                    name='title'
                    placeholder={width > 768 ? 'What do you need to work on today?':'Add Activity ...'}
                    style={{padding: '10px', marginBottom: '10px', width: '40vw'}}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <div>
                    <h3>Hours</h3>
                    <button onClick={this.increaseHours} style={incrementButtonStyle}> + </button>
                    <span> {this.state.hours} </span>
                    <button onClick={this.decreaseHours} style={incrementButtonStyle}> - </button>
                
                    <h3>Minutes</h3>
                    <button onClick={this.increaseMinutes} style={incrementButtonStyle}> + </button>
                    <span> {this.state.minutes} </span>
                    <button onClick={this.decreaseMinutes} style={incrementButtonStyle}> - </button>
                </div>
                <input
                    type="submit" 
                    value="Submit"  
                    style={{width: '25vw', padding: '5px', marginTop: '15px'}}              
                />
            </form>             
            
        )
    }
}

// styling

const formStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#1D3557',
    color: '#F1FAEE'
}

const incrementButtonStyle = {
    padding: '3px 5px',
    margin: '2px 2px',
    display: 'inline-block',
    //border: 'none',
}

// variable for title placeholder value
let width = window.innerWidth

// prop types
AddActivity.propTypes = {
    addActivity: PropTypes.func.isRequired
}


export default AddActivity;
