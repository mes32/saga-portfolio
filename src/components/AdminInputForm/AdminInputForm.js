import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            tag_id: 1,
            github: 'https://github.com/mes32/raaq-pizza-parlour',
            website: '',
            description: 'An example CRUD application that allows users to order pizza'
        };
    }

    componentDidMount() {
        const action = { type: 'FETCH_TAGS' };
        this.props.dispatch(action);
    }

    // Handle changes to the 'Name' field
    changeName = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        });
    }

    // TODO: Handle changes to all these text fields using a single onChange 
    // function

    // Handle changes to the 'Date' field
    changeDate = (event) => {
        this.setState({
            ...this.state,
            date_completed: event.target.value,
        });
    }

    // Handle changes to the 'Tag' field
    changeTag = (event) => {
        this.setState({
            ...this.state,
            tag_id: event.target.value,
        });
    }

    // Handle changes to the 'GitHub' field
    changeGitHub = (event) => {
        this.setState({
            ...this.state,
            github: event.target.value,
        });
    }

    // Handle changes to the 'Website' field
    changeWebsite = (event) => {
        this.setState({
            ...this.state,
            website: event.target.value,
        });
    }

    // Handle presses to the 'Submit' button
    submit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const action = { type: 'ADD_PROJECT', payload: this.state };
        this.props.dispatch(action);
    }

    // Display this component on the webpage
    render() {
        return (
            <div>
                <h2>Add New Project</h2>
                <form onSubmit={this.submit}>
                    <input onChange={this.changeName} placeholder="Name" type="text" required />
                    {/* TODO: Make Date and Tag more specific input types */}
                    <input onChange={this.changeDate} placeholder="Date" type="text" />
                    <input onChange={this.changeTag} placeholder="Tag" type="text" />
                    {/* TODO: Format the form in a way that does not rely on <br /> */}
                    <br />
                    <input onChange={this.changeGitHub} placeholder="GitHub URL" type="text" />
                    <input onChange={this.changeWebsite} placeholder="Website URL" type="text" />
                    <input onChange={this.changeDescription} placeholder="Description" type="text" />
                    {/* TODO: Format the form in a way that does not rely on <br /> */}
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({ rs });
export default connect(mapReduxStoreToProps)(AdminPage);