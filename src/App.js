import React, { Component } from 'react';
import Header from './components/Header';
import AddActivity from './components/AddActivity';
import Activities from './components/Activities';
import Reset from './components/Reset';
import './App.css';
import uuid from 'uuid';


class App extends Component {

  state = {
    activities: []
  }
  
  // countdown start / stop functions
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick(){
    // create copy of activities and update new times for all activities with setState
    let activitiesCopy = JSON.parse(JSON.stringify(this.state.activities));

    this.setState({
      activities: activitiesCopy.map(activity => {
        // grab variables needed from the activity
        let { hours, minutes, seconds, countdown} = activity;
        if(countdown){
          if(seconds === 0){
            if(minutes === 0){
              if(hours === 0){
                // timer complete
                activity.countdown = false;
              }else {
                activity.hours--;
                activity.minutes = 59;
                activity.seconds = 59;
              }
            }else{
              activity.minutes--;
              activity.seconds = 59;
            }
          }else {
            activity.seconds--;
          }
        }
        return activity;
      })
    });
  }

  // change countdown status
  toggleCountdown = (id) => {
    this.setState({
      activities: this.state.activities.map(activity => {
        if(activity.id === id){
          activity.countdown = !activity.countdown;
        }
        return activity;
      })
    });
  }
  //--------------------------------

  // add new activity item
  addActivity = (title, hours, minutes) => {
    const newActivity = {
      id: uuid.v4(),
      title,
      hours,
      minutes,
      seconds: 0,
      originalTime: {hours: hours, minutes: minutes}
    }
    this.setState({
      activities: [...this.state.activities, newActivity]
    });
  }

  // delete activity item
  delActivity = (id) => {
    this.setState({
      activities: [...this.state.activities.filter(activity => activity.id !== id)]
    });
  }

  // reset activities timers
  resetActivities = () => {
    this.setState({
      activities: this.state.activities.map(activity => {
        activity.hours = activity.originalTime.hours;
        activity.minutes = activity.originalTime.minutes;
        activity.seconds = 0;
        activity.countdown = false;
        return activity;
      })
    });
  }

  

  render(){
    return (
      <div className="App">
        <Header />
        <AddActivity addActivity={this.addActivity}/>
        <Reset resetActivities={this.resetActivities}/>
        <Activities activities={this.state.activities}
        delActivity={this.delActivity} toggleCountdown={this.toggleCountdown}/>
      </div>
    );
  }
}

export default App;
