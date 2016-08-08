import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as GiphyReducers from "../logic/giphySearch/reducers";
import * as TodoReducers from "../logic/todo/reducers";
import * as LoadingReducers from "../logic/loading/reducers";

const initialState = {};

const combinedReducers = combineReducers(
  Object.assign(
    GiphyReducers,
    TodoReducers,
    LoadingReducers
  )
);

export let configureStore = () => {
  return createStore(
    combinedReducers,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware
      ),
      window.devToolsExtension ? window.devToolsExtension() : undefined
    )
  )
}