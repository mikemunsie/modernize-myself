import { combineReducers } from 'redux';
import * as GiphyReducers from "../giphySearch/giphySearchReducer";
import * as TodoReducers from "../todo/todoReducer";
import * as LoadingReducers from "../loader/loaderReducer";

export const combinedReducers = combineReducers(
  Object.assign(
    GiphyReducers,
    TodoReducers,
    LoadingReducers
  )
);