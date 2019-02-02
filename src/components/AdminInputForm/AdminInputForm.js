import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            dateFinished: '',
            tag: '',
            github: '',
            website: '',
            desciption: ''
        };
    }

    changeName = (event) => {
        // this.setState({
        //     ...this.state,
        //     event.target.value,
        // });
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <h2>Add New Project</h2>
                <form>
                    <input onChange={this.changeName} placeholder="Name" type="text" required />
                </form>
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({ rs });
export default connect(mapReduxStoreToProps)(AdminPage);