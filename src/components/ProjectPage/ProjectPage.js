import React, { Component } from 'react';
import { connect } from 'react-redux';

import Project from '../Project/Project.js';

class ProjectPage extends Component {
    
    // As soon as this component mounts, disptach saga to fetch all projects
    componentDidMount() {
        const action = { type: 'FETCH_PROJECTS' };
        this.props.dispatch(action);
    }

    // Display this component on the DOM
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Michael Stockman</h1>
                </header>
                {this.props.rs.projects.map((project) => 
                    <Project key={project.id} project={project} />    
                )}
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({rs});
export default connect(mapReduxStoreToProps)(ProjectPage);