import React, { Component } from 'react';
import './Project.css';

class Project extends Component {

    // Return the project description if available
    putDescription() {
        if (this.props.project.description) {
            return <p>{this.props.project.description}</p>;
        }
    }

    // Return the completion date if available
    putDate() {
        if (this.props.project.date) {
            return <p>{this.props.project.date}</p>;
        }
    }

    // Return in image of the project if available
    putThumbnail() {
        if (this.props.project.thumbnail) {
            return (
                <img 
                    src={this.props.project.thumbnail} 
                    alt={this.props.project.desciption} 
                    className="thumbnail" 
                />
            );
        } else {
            return <div className="thumbnailPlaceholder"></div>;
        }
    }

    // Return a link to the project github repo if available
    putGitHub() {
        if (this.props.project.github) {
            return <span><a href={this.props.project.github} target="_blank" rel="noopener noreferrer">GitHub</a> ◆ </span>;
        }
    }

    // Return a link to the project website if available
    putWebsite() {
        if (this.props.project.website) {
            return <span><a href={this.props.project.website} target="_blank" rel="noopener noreferrer">Website</a> ◆ </span>;
        }
    }

    // Return the project tag if available
    putTag() {
        if (this.props.project.tag) {
            return this.props.project.tag;
        }
    }

    // Display this component on the DOM
    render() {
        const project = this.props.project;
        return (
            <div>
                <h3>{project.name}</h3>
                {this.putDescription()}
                {this.putDate()}
                {this.putThumbnail()}
                <p>
                    {this.putGitHub()}
                    {this.putWebsite()}
                    {this.putTag()}
                </p>
            </div>
        );
    }
}

export default Project;