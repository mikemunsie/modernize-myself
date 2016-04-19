// Next Up: https://egghead.io/lessons/javascript-redux-reducer-composition-with-combinereducers

import _ from 'lodash';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.data.id,
        text: action.data.text,
        completed: action.data.completed
      }
    case "TOGGLE_TODO":
      if (state.id !== action.data.id) return state;
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined, action)
      ];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

const visiblityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}

// Reducer that calls existing reducers that combines the results into one object. Neat :)
const todoApp = (state = {}, action) => {
  return {
    todos: todos(state.todos, action),
    visiblityFilter: visiblityFilter(state.visibilityFilter, action)
  }
}

let store = createStore(todoApp);

store.dispatch({
  type: "ADD_TODO",
  data: {
    id: 1,
    text: "Test Text",
    completed: true
  }
});

store.dispatch({
  type: "TOGGLE_TODO",
  data: {
    id: 1
  }
});

store.dispatch({
  type: "SET_VISIBILITY_FILTER",
  filter: "SHOW_COMPLETED"
});

console.log(store.getState())