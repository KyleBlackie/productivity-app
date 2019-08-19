import React, { Component } from 'react';
import Header from './components/Header';
import AddActivity from './components/AddActivity';
import Activities from './components/Activities';
import './App.css';
import uuid from 'uuid';


class App extends Component {

  state = {
    activities: [
      {
        id: 0,
        title: "haha good title",
        hours: 1,
        minutes: 1,
        seconds: 0,
        countdown: true
      }
    ]
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
    let activitiesCopy = JSON.parse(JSON.stringify(this.state.activities));

    // should change this to a high order function if possible
    for(let i = 0; i < activitiesCopy.length; i++) {
      let { hours, minutes, seconds, countdown} = activitiesCopy[i];
      if(countdown){
        if(seconds === 0){
          if(minutes === 0){
            if(hours === 0){
              // timer complete
              activitiesCopy[i].countdown = false;
            }else {
              activitiesCopy[i].hours--;
              activitiesCopy[i].minutes = 59;
              activitiesCopy[i].seconds = 59;
            }
          }else{
            activitiesCopy[i].minutes--;
            activitiesCopy[i].seconds = 59;
          }
        }else {
          activitiesCopy[i].seconds--;
        }
      }
      
    }

    this.setState({
      activities: activitiesCopy
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
      seconds: 0
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

  

  render(){
    return (
      <div className="App">
        <Header />
        <AddActivity addActivity={this.addActivity}/>
        <Activities activities={this.state.activities}
        delActivity={this.delActivity} toggleCountdown={this.toggleCountdown}/>
      </div>
    );
  }
}

export default App;
