import React from 'react';


const PersoRoutines = (props) => {
    return (
        <div>
            <h3>Personnal routines:</h3>
            {props.list.map(list => {
                return (
                    <p>
                      {list}         
                    </p>
                );
            })}
        </div>
    );
}

export default PersoRoutines;