import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class Playback extends Component {
    
    closePlayback = () => {
        this.props.handlePlayback();
    }

    render() {
        const exercises = this.props.selectedExercise[0].exercises;
        const exerciseList = exercises.map((exercise) => {
            return <li key={exercise}>{exercise}</li>
        });
        return(
            <div>
                <h2>{this.props.selectedExercise[0].title}</h2>
                <span><Button>Prev.</Button>Current Exercise<Button>Next</Button></span>
                <ul>
                    {exerciseList}
                </ul>
                <Button onClick={this.closePlayback}>Close</Button>
            </div>
        );
    }
}


export default Playback;