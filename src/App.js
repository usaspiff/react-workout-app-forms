import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TablePerso from './containers/persoRoutines';
import FormContainer from './containers/FormContainer';
import Footer from './components/Footer';

class App extends Component {
  state = {
    workouts: ['workoutOne', 'workoutTwo']
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

  handleSubmit = workout => {
    this.setState({ workouts: [...this.state.workouts, workout] });
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
      />
        <h3>Create a new excercise list</h3>
        <FormContainer handleSubmit={this.handleSubmit}  />
        <Footer />
      </div>
    );  
}
}


export default App;
