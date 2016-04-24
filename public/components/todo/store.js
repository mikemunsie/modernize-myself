import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from './reducers';

export const store = createStore(combineReducers({
  todos,
  visibilityFilter
}));