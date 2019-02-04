import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TablePerso from './containers/persoRoutines';
import TablePreset from './containers/presetRoutines';
import FormContainer from './containers/FormContainer';
// import EditForm from "./containers/EditForm";
import Footer from './components/Footer';
import TestList from './components/TestList';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



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
    ],

    showForm: false,
    showTest: false,
  };

  // editWorkout = index => {
  //   const { workouts } = this.state;

  //   this.setState({

  //   })
  // }

  handleClose = () => {
    this.setState({ showForm: false });
  };

  handleShow = () => {
    this.setState({ showForm: true });
  };

  removeWorkout = index => {
    const { workouts } = this.state;

    this.setState({
      workouts: workouts.filter((workout, i) => {
        return i !== index;
      })
    });
  };

  startWorkout = index => {
    const { workouts } = this.state;
    const workoutSelect = workouts.filter((workout, i) => {
      return i === index+3; //take into account the order in the perso table workout, add +3.
    });
    return workoutSelect[0].title;
  };

  handleSubmit = workout => {
    this.setState(
      prevState => ({ workouts: [...prevState.workouts, workout] }),
      () => console.log(this.state)
    );
    this.setState({ showForm: false });
  };

  render() {
    const { workouts } = this.state;
    const { showTestTitle } = this.state.showTest;

    return <div className="col-md-6" style={{ marginLeft: "40px" }}>
        <Header />

        {workouts.length > 3 ? <TablePerso workoutData={workouts} editWorkout={this.editWorkout} removeWorkout={this.removeWorkout} startWorkout={this.startWorkout} /> : <h3>
            No personnal routine yet
          </h3>}

        <Button variant="primary" onClick={this.handleShow}>
          + Create Routine
        </Button>

        <Modal show={this.state.showForm} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Workout Routine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormContainer handleSubmit={this.handleSubmit} />
          </Modal.Body>
        </Modal>

        {/* <EditForm editSubmit={this.editSubmit} /> */}

        <TablePreset workoutData={workouts} startWorkout={this.startWorkout} />

        {showTestTitle === true && <TestList />}
      <TestList title={"placeholder"}/>
        <Footer />
      </div>;
  }
}


export default App;
