import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TablePerso from './containers/persoRoutines';
import TablePreset from './containers/presetRoutines';
import FormContainer from './containers/FormContainer';
import EditForm from "./containers/EditForm";
import Footer from './components/Footer';
import Playback from './components/Playback';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";



class App extends Component {
  state = {
    workouts: [
      {
        title: "workoutOne",
        exercises: ["situps", "plank"]
      },
      {
        title: "workoutTwo",
        exercises: ["situps", "plank"]
      },
      {
        title: "workoutThree",
        exercises: ["situps", "plank"]
      },
      {
        title: "workoutFor",
        exercises: ["situps", "plank"]
      }
    ],

    showForm: false,
    showEditForm: false,
    showTest: false,
    showPlayback: false,
    selectedExercise: '',
    editExercise: '',
  };




  /* LOCALSTORAGE */
  componentDidMount() {
    if (localStorage.getItem("workouts") !== null) {
      const savedRoutines = JSON.parse(localStorage.getItem("workouts"));
      this.setState({ workouts: savedRoutines });
    }

  }


  componentDidUpdate() {
    localStorage.setItem("workouts", JSON.stringify(this.state.workouts));
    // console.log('localstorage is ' + this.state.workouts)
  }

  /* ******************************** */

  handleClose = () => {
    this.setState({
      showForm: false,
      showEditForm: false
    });
  };

  handleShow = () => {
    this.setState({ showForm: true });
  };

  removeWorkout = index => {
    const { workouts } = this.state;
    console.log(index);
    this.setState({
      workouts: workouts.filter((workout, i) => {
        return i !== index + 3;
      })
    });
  };

  editWorkout = index => {
    const { workouts } = this.state;

    this.setState({
      editExercise: '',
      editIndex: index + 3
    });
    this.setState(
      prevState => ({ editExercise: [...prevState.editExercise, workouts[index + 3]] }),
      () => console.log(this.state.editExercise[0].title)
    );
    this.setState({ showEditForm: true });
  };

  handlePlayback = () => {
    this.setState({ showPlayback: false });
  };

  startWorkout = row => {
    this.setState({ showPlayback: true });
    this.setState({ selectedExercise: [] });
    this.setState(
      prevState => ({ selectedExercise: [...prevState.selectedExercise, row] }),
      () => console.log(this.state.selectedExercise[0].exercises)
    );
  };

  editSubmit = workout => {
    const workouts = [...this.state.workouts];
    workouts[this.state.editIndex] = workout;
    this.setState({
      workouts,
      showEditForm: false,
      editIndex: ''
    });
    this.setState({

    });
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

    return <div className="col-md-6" style={{ marginLeft: "40px" }}>
      <Header />

      {this.state.showPlayback === true && <Playback handlePlayback={this.handlePlayback} selectedExercise={this.state.selectedExercise} />}

      {workouts.length > 3 ? <TablePerso workoutData={workouts} editWorkout={this.editWorkout} removeWorkout={this.removeWorkout} startWorkout={this.startWorkout} /> : <h3>
        No personnal routine yet
          </h3>}

      <Button variant="primary" onClick={this.handleShow}>
        + Create Routine
        </Button>

      <Modal show={this.state.showForm} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New workout routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContainer handleSubmit={this.handleSubmit} />
        </Modal.Body>
      </Modal>


      <Modal show={this.state.showEditForm} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Workout Routine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm editExercise={this.state.editExercise[0]} editSubmit={this.editSubmit} handleClose={this.handleClose} />
        </Modal.Body>
      </Modal>


      <TablePreset workoutData={workouts} startWorkout={this.startWorkout} />

      <Footer />
    </div>;
  }
}


export default App;
