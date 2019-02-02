import React, { Component } from 'react';
import { connect } from 'react-redux';

class AdminPage extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Admin Page</h1>
                </header>

            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({ rs });
export default connect(mapReduxStoreToProps)(AdminPage);