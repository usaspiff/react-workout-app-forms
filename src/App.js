import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TablePerso from './containers/persoRoutines';
import TablePreset from './containers/presetRoutines';
import FormContainer from './containers/FormContainer';
import Footer from './components/Footer';

class App extends Component {
  state = {
    workouts: [
      {
        title: "workoutOne",
        exercises: ["situps", "planks"]
      },
      {
        title: "workoutTwo",
        exercises: ["situpss", "plankss"]
      },
      {
        title: "workoutThree",
        exercises: ["situpsss", "planksss"]
      },
      {
        title: "workoutFor",
        exercises: ["situpssss", "plankssss"]
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
  };

  // startWorkout = index => {
  //   const { workouts } = this.state;

  // }

  handleSubmit = workout => {
    this.setState(
      prevState => ({ workouts: [...prevState.workouts, workout] }),
      () => console.log(this.state)
    );
  };

  render() {
    const { workouts } = this.state;

    return (
      <div className="col-md-6" style={{ marginLeft: "40px" }}>
        <Header />

        {workouts.length > 3 ?
        <TablePerso
          workoutData={workouts}
          editWorkout={this.editWorkout}
          removeWorkout={this.removeWorkout}
          startWorkout={this.startWorkout}
        />
          :
        <div>
          <h3>No personnal routine yet</h3>
          <p>+ Create routine +</p>
        </div>
        }
        <FormContainer handleSubmit={this.handleSubmit} />
        <TablePreset
          workoutData={workouts}
          startWorkout={this.startWorkout}
        />
        <Footer />
      </div>
    );
  }
}


export default App;
