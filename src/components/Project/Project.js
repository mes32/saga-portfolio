import React, { Component } from 'react';
import './Project.css';

class Project extends Component {

    putDescription() {
        if (this.props.project.description) {
            return <p>{this.props.project.description}</p>;
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
            return <a href={this.props.project.github} target="_blank">GitHub</a>;
        }
    }

    // Return a link to the project website if available
    putWebsite() {
        if (this.props.project.website) {
            return <a href={this.props.project.website} target="_blank">Website</a>;
        }
    }

    // Return the project tag if available
    putTag() {
        if (this.props.project.tag) {
            return this.props.project.tag;
        }
    }

    // Show this component on the page
    render() {
        const project = this.props.project;
        return (
            <div>
                <h3>{project.name}</h3>
                {this.putDescription()}
                {this.putThumbnail()}
                <p>
                    {this.putGitHub()}&nbsp;
                    {this.putWebsite()}&nbsp;
                    {this.putTag()}
                </p>
            </div>
        );
    }
}

export default Project;