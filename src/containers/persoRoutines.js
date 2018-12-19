import React, { Component } from 'react';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Edit</th>
                <th>Remove</th>
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
          </tr>;
    });

    return <tbody>{rows}</tbody>;
}

class TablePerso extends Component {
    render() {
        const { workoutData, editWorkout, removeWorkout } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody workoutData={workoutData} editWorkout={editWorkout} removeWorkout={removeWorkout} />
            </table>
        );
    }
}

export default TablePerso;