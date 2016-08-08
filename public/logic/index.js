import { combineReducers } from 'redux';
import * as GiphyReducers from "./giphySearch/reducers";
import * as TodoReducers from "./todo/reducers";
import * as LoadingReducers from "./loader/reducers";

export const combinedReducers = combineReducers(
  Object.assign(
    GiphyReducers,
    TodoReducers,
    LoadingReducers
  )
);