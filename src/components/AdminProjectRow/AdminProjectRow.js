import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminProjectRow extends Component {

    delete = (event) => {
        const action = {
            type: 'DELETE_PROJECT',
            payload: this.props.project
        };
        this.props.dispatch(action);
    }

    // Display this component on the webpage
    render() {
        const project = this.props.project;
        return (
            <tr>
                <td>{project.name}</td>
                <td>
                    <button onClick={this.delete}>delete</button>
                </td>
            </tr>
        );
    }
}

export default connect()(AdminProjectRow);