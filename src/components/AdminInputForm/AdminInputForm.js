import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            date: '',
            tag: '',
            github: '',
            website: '',
            description: ''
        };
    }

    changeName = (event) => {
        this.setState({
            ...this.state,
            name: event.target.value,
        });
    }

    changeGitHub = (event) => {
        this.setState({
            ...this.state,
            github: event.target.value,
        });
    }

    changeWebsite = (event) => {
        this.setState({
            ...this.state,
            website: event.target.value,
        });
    }

    submit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>Add New Project</h2>
                <form onSubmit={this.submit}>
                    <input onChange={this.changeName} placeholder="Name" type="text" required />
                    
                    <input onChange={this.changeGitHub} placeholder="GitHub URL" type="text" />
                    <input onChange={this.changeWebsite} placeholder="Website URL" type="text" />
                    <input onChange={this.changeDescription} placeholder="Description" type="text" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({ rs });
export default connect(mapReduxStoreToProps)(AdminPage);