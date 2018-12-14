import React, {Component} from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import CheckBox from '../components/CheckBox';

class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state= {
            newRoutine: {
                title: '',
                exercises: []
            },

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

        this.handleTitle = this.handleTitle.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleTitle(e) {
        let value = e.target.value;
        this.setState( prevState => ({ newRoutine :
            {...prevState.newRoutine, title: value}
        }), () => console.log(this.state.newRoutine))
    }

    handleCheckBox(e) {
        const newSelection = e.target.value;
        let newSelectionArray;

        if(this.state.newRoutine.exercises.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.newRoutine.exercises.filter( s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.newRoutine.exercises, newSelection];
        }

        this.setState( prevState => ({ newRoutine: {...prevState.newRoutine, exercises: newSelectionArray}}))
    }

    handleClearForm(e) {
        e.preventDefault();
        this.setState({
            newRoutine: {
                title: '',
                exercises: []
            }
        })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.setState({newRoutine: [...this.state.newRoutine, e]});
    }

    render() {
        return (

            <form className='container-fluid' onSubmit={this.handleFormSubmit}>
            
            <Input
                inputType ={'text'}
                title = {'Exercise routine name'}
                name = {'name'}
                value = {this.state.newRoutine.title}
                placeholder = {'Enter a title'}
                handleChange = {this.handleInput}
            />

            <CheckBox
                title = {'Exercises'}
                name = {'Exercises'}
                options = {this.state.exercisesList}
                selectedOptions = {this.state.newRoutine.exercises}
                handleChange = {this.handleCheckBox}
            />

            <Button
                action = {this.handleFormSubmit}
                type = {'primary'}
                title = {'Submit'}
                style = {buttonStyle}
            />

            <Button
                action = {this.handleClearForm}
                type = {'secondary'}
                title = {'Clear'}
                style = {buttonStyle}
            />

            </form>

        );
    }

}

const buttonStyle = {
    margin: '10px 10px 10px 10px'
}



export default FormContainer;
