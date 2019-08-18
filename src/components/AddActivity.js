import React, { Component } from 'react'

export class AddActivity extends Component {
    
    state = {
        title: '',
        hours: 0,
        minutes: 0
    }

    
    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    //Change values for duration of activity to be added
    
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
            return state.minutes === 60 ? {minutes: 0} : {minutes: state.minutes + 1};
        });
    }

    decreaseMinutes = (e) => {
        e.preventDefault();
        this.setState((state) => {
            return state.minutes === 0 ? {minutes: 0} : {minutes: state.minutes - 1};
        });
    }



    render() {
        return (
            <form>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Activity ..."
                    style={{padding: '5px'}}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <br/>
                <div>
                    <h3>Hours</h3>
                    <button onClick={this.increaseHours}> + </button>
                    <span> {this.state.hours} </span>
                    <button onClick={this.decreaseHours}> - </button>
                </div>
                <div>
                    <h3>Minutes</h3>
                    <button onClick={this.increaseMinutes}> + </button>
                    <span> {this.state.minutes} </span>
                    <button onClick={this.decreaseMinutes}> - </button>
                </div>
                <input
                    type="submit" 
                    value="Submit"                
                />
            </form>             
            
        )
    }
}

export default AddActivity;
