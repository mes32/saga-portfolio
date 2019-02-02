import React, { Component } from 'react';
import './Project.css';

class Project extends Component {

    

    render() {
        const project = this.props.project;
        return (
            <div>
                {/* <p>{JSON.stringify(project)}</p> */}
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <img src={project.thumbnail} alt={project.desciption} className="thumbnail" />
                <p>
                    <a href={project.github}>GitHub</a> | 
                    <a href={project.website}>Website</a> | 
                    {project.tag}
                </p>
            </div>
        );
    }
}

export default Project;