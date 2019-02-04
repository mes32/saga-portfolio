import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdminProjectRow from '../AdminProjectRow/AdminProjectRow.js';

class AdminProjectTable extends Component {

    // As soon as this component mounts, disptach saga to fetch all projects
    componentDidMount() {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    // Display this component on the DOM
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.rs.projects.map(
                        (project) => <AdminProjectRow key={project.id} project={project} />
                    )}
                </tbody>
            </table>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({rs});
export default connect(mapReduxStoreToProps)(AdminProjectTable);