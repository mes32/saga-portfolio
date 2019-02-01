import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectPage extends Component {
    componentDidMount() {
        // const action = { type: 'FETCH_PROJECTS' };
        // this.props.dispatch(action);
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Projects Page</h1>
                </header>
                
            </div>
        );
    }
}

export default connect()(ProjectPage);