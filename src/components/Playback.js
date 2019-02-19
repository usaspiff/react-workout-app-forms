import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class Playback extends Component {
    state = {
        index: 0,
    }

    increment = () => {
        this.state.index < this.props.selectedExercise[0].exercises.length -1 &&
        this.setState({
            index: this.state.index +1
        })
    }

    decrement = () => {
        this.state.index > 0 &&
        this.setState({
            index: this.state.index -1
        })
    }

    closePlayback = () => {
        this.props.handlePlayback();
    }

    render() {
        const index = this.state.index;
        const displayExercise = this.props.selectedExercise[0].exercises[index];
        const exercises = this.props.selectedExercise[0].exercises;
        const exerciseList = exercises.map((exercise) => {
            return <li key={exercise}>{exercise}</li>
        });
        console.log(displayExercise)
        return (
            <div>
                <h2>{this.props.selectedExercise[0].title}</h2>
                <span>
                    <Button onClick={this.decrement}>Prev.</Button>     {displayExercise}<Button onClick={this.increment}>Next</Button></span>
                <ul>
                    {exerciseList}
                </ul>
                <Button onClick={this.closePlayback}>Close</Button>
            </div>
        );
    }
}


export default Playback;