import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagsDropDown from '../TagsDropDown/TagsDropDown.js';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date_completed: null,
            tag_id: 0,
            github: '',
            website: '',
            description: ''
        };
    }

    // Handle changes to the text input field
    changeInput = (event) => {
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
                    <input onChange={this.changeInput} name="name" placeholder="Name" type="text" required />
                    <input onChange={this.changeInput} name="date_completed" placeholder="Date" type="date" />
                    <TagsDropDown setTagID={this.setTagID} />
                    <br /> {/* TODO: Eventually remove <br /> */}
                    <input onChange={this.changeInput} name="github" placeholder="GitHub URL" type="text" />
                    <input onChange={this.changeInput} name="website" placeholder="Website URL" type="text" />
                    <input onChange={this.changeInput} name="description" placeholder="Description" type="text" />
                    <br /> {/* TODO: Eventually remove <br /> */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default connect()(AdminPage);