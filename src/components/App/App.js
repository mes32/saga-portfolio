import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import './App.css';
import AdminPage from '../AdminPage/AdminPage.js';
import ProjectPage from '../ProjectPage/ProjectPage.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={ProjectPage} />
            <Route exact path="/admin" component={AdminPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
