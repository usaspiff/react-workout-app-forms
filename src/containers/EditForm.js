import React, { Component } from 'react';

import ButtonForm from '../components/Button';
import Input from '../components/Input';
import CheckBox from '../components/CheckBox';

class EditForm extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            newRoutine: this.props.editExercise,

            exercisesList: [
                'situps',
                'plank',
                'pushups',
                'bicepscurls',
                'tricepsextention',
                'benchpress',
                'squats',
                'lounges',
                'calvesstretch'
            ]
        }

        this.state = this.initialState;

        this.handleTitle = this.handleTitle.bind(this);
        this.submitEditForm = this.submitEditForm.bind(this);
        this.handleCancelForm = this.handleCancelForm.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleTitle(e) {
        let value = e.target.value;
        this.setState(prevState => ({
            newRoutine:
                { ...prevState.newRoutine, title: value }
        }), () => console.log(this.state.newRoutine.title))
    }

    handleCheckBox(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if (this.state.newRoutine.exercises.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newRoutine.exercises.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.newRoutine.exercises, newSelection];
        }

        this.setState(prevState => ({ newRoutine: { ...prevState.newRoutine, exercises: newSelectionArray } }))
    }

    handleCancelForm(e) {
        e.preventDefault();
        this.setState({
            newRoutine: {
                title: "",
                exercises: []
            }
        });
        this.props.handleClose();
    }

    submitEditForm = (e) => {
        e.preventDefault();
        this.props.editSubmit(this.state.newRoutine);
        console.log(this.state.newRoutine)
        this.setState(this.initialState);
    }

    render() {
        const editRoutineTitle = this.state.newRoutine.title;
        console.log(this.state.newRoutine)
        return (

            <form className='container-fluid' onSubmit={this.submitEditForm}>

                <Input
                    inputType={'text'}
                    title={'Exercise routine name '}
                    name={'name'}
                    value={this.state.newRoutine.title}
                    placeholder={editRoutineTitle}
                    handleChange={this.handleTitle}
                />

                <CheckBox
                    title={'Exercises'}
                    name={'Exercises'}
                    options={this.state.exercisesList}
                    selectedOptions={this.state.newRoutine.exercises}
                    handleChange={this.handleCheckBox}
                />

                <ButtonForm
                    action={this.state.newRoutine.title !== '' && this.state.newRoutine.exercises.length > 0 && this.submitEditForm}
                    type={'primary'}
                    title={'Update'}
                    // style={buttonStyle}
                />

                <ButtonForm
                    action={this.handleCancelForm}
                    type={'secondary'}
                    title={'Cancel'}
                    // style={buttonStyle}
                />

            </form>

        );
    }

}

// const buttonStyle = {
//     margin: '10px 10px 10px 10px'
// }



export default EditForm;
