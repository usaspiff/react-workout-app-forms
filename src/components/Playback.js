import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class Playback extends Component {
    state = {
        listIndex: 0,
    }

    increment = () => {
        this.state.listIndex < this.props.selectedExercise[0].exercises.length -1 &&
        this.setState({
            listIndex: this.state.listIndex +1
        })
    }

    decrement = () => {
        this.state.listIndex > 0 &&
        this.setState({
            listIndex: this.state.listIndex -1
        })
    }

    closePlayback = () => {
        this.props.handlePlayback();
    }

    render() {
        const selectedExerciseStyle = {
            color: 'red',
        };
        const listIndex = this.state.listIndex;
        const displayExercise = this.props.selectedExercise[0].exercises[listIndex];
        const exercises = this.props.selectedExercise[0].exercises;
        const exerciseList = exercises.map((exercise, index) => { if(index === this.state.listIndex) {
            return <li key={index} style={selectedExerciseStyle}>{exercise}</li>  
        } else {
            return <li key={index}>{exercise}</li>
        }
        });
        console.log(displayExercise)
        return (
            <div>
                <h2>{this.props.selectedExercise[0].title}</h2>
                <span>
                    <Button onClick={this.decrement}>Prev.</Button>{displayExercise}<Button onClick={this.increment}>Next</Button></span>
                <ul>
                    {exerciseList}
                </ul>
                <Button onClick={this.closePlayback}>Close</Button>
            </div>
        );
    }
}


export default Playback;