import axios from 'axios';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('ADD_PROJECT', addProject);
    yield takeEvery('DELETE_PROJECT', deleteProject);
}

// Request all projects from server via route GET /projects
// Then update the reducer 'projects'
function* fetchProjects(action) {
    try {
        const response = yield axios.get('/project');
        const nextAction = { type: 'SET_PROJECTS', payload: response.data };
        yield put(nextAction);
    } catch (error) {
        // TODO: This should be handled by a dispatch/put
        const errorMessage = `Error using route GET /projects, ${error}`;
        console.log(errorMessage);
        alert(errorMessage);
    }
}

// Request that a project be added to the server via route POST /projects
// Then re-fetch all projects from the server
function* addProject(action) {
    const project = action.payload;
    try {
        yield axios.post('/project', project);
        const nextAction = { type: 'FETCH_PROJECTS' };
        yield put(nextAction);

        // TODO: This should be handled by a dispatch/put
        alert(`Successs: New project '${project.name}' added`);
    } catch (error) {
        // TODO: This should be handled by a dispatch/put
        const errorMessage = `Error using route POST /projects, ${error}`;
        console.log(errorMessage);
        alert(errorMessage);
    }
}

// Request that a project be deleted from the server via route DELETE 
// /projects/:id. Then re-fetch all projects from the server
function* deleteProject(action) {
    const project = action.payload;
    try {
        yield axios.delete(`/project/${project.id}`);
        const nextAction = { type: 'FETCH_PROJECTS' };
        yield put(nextAction);
    } catch (error) {
        // TODO: This should be handled by a dispatch/put
        const errorMessage = `Error using route DELETE /projects/:id, ${error}`;
        console.log(errorMessage);
        alert(errorMessage);
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
