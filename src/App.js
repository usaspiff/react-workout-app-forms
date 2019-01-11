import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
<<<<<<< HEAD
import PersoRoutines from './containers/PersoRoutines';
=======
import TablePerso from './containers/persoRoutines';
>>>>>>> addtable
import FormContainer from './containers/FormContainer';
import Footer from './components/Footer';

class App extends Component {
  state = {
<<<<<<< HEAD
    workouts: ['workoutOneExample', 'workoutTwoExample']
=======
    workouts: ['workoutOne', 'workoutTwo']
>>>>>>> addtable
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
<<<<<<< HEAD
        <PersoRoutines
          list = {this.state.workouts}
        />
=======
      <TablePerso
        workoutData={workouts}
        editWorkout={this.editWorkout}
        removeWorkout={this.removeWorkout}
      />
>>>>>>> addtable
        <h3>Create a new excercise list</h3>
        <FormContainer handleSubmit={this.handleSubmit}  />
        <Footer />
      </div>
    );  
}
}


export default App;
