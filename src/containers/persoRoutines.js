import React, { Component } from 'react';
import Button from "react-bootstrap/Button";


const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Edit</th>
                <th>Delete</th>
                <th>Start</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.workoutData.slice(3).map((row, index) => {
        return <tr key={index}>
          <td>
            <Button onClick={() => props.startWorkout(row)}>
              {row.title}
            </Button>
          </td>
          <td>
            <Button onClick={() => props.editWorkout(index)}>Edit</Button>
          </td>
          <td>
            <Button onClick={() => props.removeWorkout(index)}>
              Delete
            </Button>
          </td>
          <td>
            <Button onClick={() => props.startWorkout(row)}>
              Start
            </Button>
          </td>
        </tr>;
    });

    return <tbody>{rows}</tbody>;
}

class TablePerso extends Component {
    render() {
        const { workoutData, editWorkout, removeWorkout, startWorkout } = this.props;

        return <div>
            <h3>Personnal workout routines</h3>
            <table>
              <TableHeader />
              <TableBody workoutData={workoutData} editWorkout={editWorkout} removeWorkout={removeWorkout}
              startWorkout={startWorkout} />
            </table>
          </div>;
    }
}

export default TablePerso;
