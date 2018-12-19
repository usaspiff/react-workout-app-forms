import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import FormContainer from './containers/FormContainer';
import Footer from './components/Footer';

class App extends Component {
  state = {
    workouts: []
  };

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
    return <div className="col-md-6" style={{ marginLeft: "40px" }}>
        <Header />
        <h3>Create a new excercise list</h3>
        <FormContainer handleSubmit={this.handleSubmit}  />
        <Footer />
      </div>;
  }
}

export default App;
