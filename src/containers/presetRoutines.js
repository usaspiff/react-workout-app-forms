import React, { Component } from 'react';
import Button from "react-bootstrap/Button";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Workout</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.workoutData.slice(0, 3).map((row, index) => {
        return (
             <tr key={index}>
            <td>
                <Button onClick={() => props.startWorkout(row)}>
                    {row.title}
                </Button>
            </td>
        </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class TablePreset extends Component {
    render() {
        const { workoutData, startWorkout } = this.props;

        return <div>
            <h3>Preset workout routines</h3>
            <table>
                <TableHeader />
                <TableBody workoutData={workoutData} startWorkout={startWorkout} />
            </table>
        </div>;
    }
}

export default TablePreset;
