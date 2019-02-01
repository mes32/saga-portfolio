import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import ProjectPage from '../ProjectPage/ProjectPage.js';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={ProjectPage} />
        </Router>
        <p>Empty Page</p>
      </div>
    );
  }
}

export default App;
