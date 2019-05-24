import React from 'react';
import ReactDOM from 'react-dom';
import  { createStore, combineReducers } from 'redux';

import App from './components/App';

// création du store

const store = createStore();

ReactDOM.render(<App />, document.getElementById('root'));
