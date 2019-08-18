import React, { Component } from 'react';
import Header from './components/Header';
import AddActivity from './components/AddActivity';
import './App.css';

class App extends Component {

  state = {
    activities: []
  }

  render(){
    return (
      <div className="App">
        <Header />
        <AddActivity />
      </div>
    );
  }
}

export default App;
