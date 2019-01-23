import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TablePerso from './containers/persoRoutines';
import FormContainer from './containers/FormContainer';
import Footer from './components/Footer';

class App extends Component {
  state = {
    workouts: [
      {
        title: 'workoutOne',
        exercises: [
          'situps',
          'planks'
        ]
      }

    ]
  };

  // editWorkout = index => {
  //   const { workouts } = this.state;

  //   this.setState({

  //   })
  // }

  removeWorkout = index => {
    const { workouts } = this.state;

    this.setState({
      workouts: workouts.filter((workout, i) => {
        return i !== index;
      })
    });
  }

  // startWorkout = index => {
  //   const { workouts } = this.state;

  // }

  handleSubmit = workout => {
    this.setState(prevState => ({ workouts: [...prevState.workouts, workout] }), () => console.log(this.state));
    
  }

  render() {

    const { workouts } = this.state;

    return(
      <div className="col-md-6" style={{ marginLeft: "40px" }}>
        <Header />
      <TablePerso
        workoutData={workouts}
        editWorkout={this.editWorkout}
        removeWorkout={this.removeWorkout}
        startWorkout={this.startWorkout}
      />
        <h3>Create a new excercise list</h3>
        <FormContainer handleSubmit={this.handleSubmit}  />
        <Footer />
      </div>
    );  
}
}


export default App;
