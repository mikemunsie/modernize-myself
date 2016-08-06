import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as GiphyReducers from "./giphySearch/reducers";
import * as TodoReducers from "./todo/reducers";

export let store = createStore(
  combineReducers(Object.assign(
    GiphyReducers,
    TodoReducers
  )),
  {},
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
)