import React from "react";

const CheckBox = (props) => {
    return(
        <div className='form-group'>
            <label for={props.name} className='form-label'>{props.title}</label>
            <div className='checkbox'>
            {props.options.map(option => {
<<<<<<< HEAD
                return (
                    <div>
                    <label key={option} className='checkbox-inline'>
                        <input

                        id = {props.name}
                        name = {props.name}
                        onChange = {props.handleChange}
                        value = {option}
                        checked = {props.selectedOptions.indexOf(option) > -1}
                        type='checkbox' /> {option}
                    </label>
                    <br />
                    </div>
                );
=======
                return <div>
                    <label key={option} className="checkbox-inline">
                      <input id={props.name} name={props.name} onChange={props.handleChange} value={option} checked={props.selectedOptions.indexOf(option) > -1} type="checkbox" /> {option}
                    </label>
                    <br />
                  </div>;
>>>>>>> addtable
            })}
            </div>
        </div>
    );
}

export default CheckBox;
