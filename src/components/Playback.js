import React, { Component } from 'react';
import Button from "react-bootstrap/Button";

class Playback extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: props.showForm,
        }
    }
    closePlayback = e => {
        e.preventDefault();
        this.props.handlePlayback(this.state.showForm);
    }

    render() {
        return(
            <div>
                <h2>Routine Title</h2>
                <span><Button>Prev.</Button>Current Excercise<Button>Next</Button></span>
                <ul>
                    <li>excercise one</li>
                    <li>excercise two</li>
                    <li>excercise three</li>
                </ul>
                <Button onClick={this.closePlayback}>Close</Button>
            </div>
        );
    }
}


export default Playback;