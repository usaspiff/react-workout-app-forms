import React, { Component } from 'react';

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
    const rows = props.workoutData.map((row, index) => {
        return <tr key={index}>
            <td>{row.title}</td>
            <td>
              <button onClick={() => props.editWorkout(index)}>
                Edit
              </button>
            </td>
            <td>
              <button onClick={() => props.removeWorkout(index)}>
                Delete
              </button>
            </td>
            <td>
                <button onClick={() => props.startWorkout(index)}>
                    Start
              </button>
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
