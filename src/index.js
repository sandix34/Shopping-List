import React from 'react';
import ReactDOM from 'react-dom';
import  { createStore, combineReducers } from 'redux';

import App from './components/App';

// création du reducer
const articlesReducer = (state = [], action) => {
    switch(action.type) {
        
        case 'ADD_ARTICLE':
            console.log('ADD_ARTICLE');
            console.log('actiopn', action);
            action.payload.id = Date.now();
            const newState = [...state, action.payload];
            return newState;
              
        default:
            return state;
    }
};

// création du store
const store = createStore(combineReducers({ articles: articlesReducer }),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



ReactDOM.render(<App />, document.getElementById('root'));
