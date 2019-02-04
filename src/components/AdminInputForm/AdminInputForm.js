import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagsDropDown from '../TagsDropDown/TagsDropDown.js';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date_completed: '',
            tag_id: 0,
            github: '',
            website: '',
            description: ''
        };

        // TODO: Remove this initial state used for testing
        this.state = {
            name: 'RAAQ! Pizza Parlour',
            date_completed: '2019-01-25',
            tag_id: 0,
            github: 'https://github.com/mes32/raaq-pizza-parlour',
            website: '',
            description: 'An example CRUD application that allows users to order pizza'
        };
    }

    // Handle changes to the text input field
    changeTextInput = (event) => {
        console.log(event.target);
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }

    // Set the value of tag_id
    setTagID = (newID) => {
        this.setState({
            ...this.state,
            tag_id: newID,
        });
    }

    // Handle 'Submit' button was pressed
    submit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const action = { type: 'ADD_PROJECT', payload: this.state };
        this.props.dispatch(action);
    }

    // Display this component on the DOM
    render() {
        return (
            <div>
                <h2>Add New Project</h2>
                <form onSubmit={this.submit}>
                    <input onChange={this.changeTextInput} name="name" placeholder="Name" type="text" required />
                    {/* TODO: Make Date a more specific input type */}
                    <input onChange={this.changeTextInput} name="date_completed" placeholder="Date" type="text" />
                    <TagsDropDown setTagID={this.setTagID} />
                    {/* TODO: Format the form in a way that does not rely on <br /> */}
                    <br />
                    <input onChange={this.changeTextInput} name="github" placeholder="GitHub URL" type="text" />
                    <input onChange={this.changeTextInput} name="website" placeholder="Website URL" type="text" />
                    <input onChange={this.changeTextInput} name="description" placeholder="Description" type="text" />
                    {/* TODO: Format the form in a way that does not rely on <br /> */}
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default connect()(AdminPage);