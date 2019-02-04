// import React, { Component } from 'react';


// const RoutineTitle = props => {
//     const rows = props.startWorkout.title;

//     return <div>{rows}</div>;
// }

// class TestList extends Component {
//     render() {
//         const { workoutData, startWorkout } = this.props;

//         return (
//             <div>
//                 <h3>Test</h3>
//                 <RoutineTitle workoutData={workoutData} startWorkout={startWorkout} />
//             </div>);
//     }
// }

// export default TestList;

import React from 'react';


const TestList = (props) => {
    return (
      <div>
          <p>Extract the routine info after clicking it in the table</p>
        <h4>{props.title}</h4>
      </div>
    );


}

export default TestList;