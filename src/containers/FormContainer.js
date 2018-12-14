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
                { id: 1, title: 'situps', category: 'abs' },
                { id: 2, title: 'plank', category: 'abs' },
                { id: 3, title: 'pushups', category: 'abs' },
                { id: 4, title: 'bicepscurls', category: 'arms' },
                { id: 5, title: 'tricepsextention', category: 'arms' },
                { id: 6, title: 'benchpress', category: 'arms' },
                { id: 7, title: 'squats', category: 'legs' },
                { id: 8, title: 'lounges', category: 'legs' },
                { id: 9, title: 'calvesstretch', category: 'legs' }
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
    
}

export default FormContainer;