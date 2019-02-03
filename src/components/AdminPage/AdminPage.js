import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AdminInputForm from '../AdminInputForm/AdminInputForm.js';
import AdminProjectTable from '../AdminProjectTable/AdminProjectTable.js';

class AdminPage extends Component {

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1>Admin Page</h1>
                </header>
                <Link to="/" >Back to Projects</Link>
                <AdminInputForm />
                <AdminProjectTable />
            </div>
        );
    }
}

const mapReduxStoreToProps = (rs) => ({ rs });
export default connect(mapReduxStoreToProps)(AdminPage);