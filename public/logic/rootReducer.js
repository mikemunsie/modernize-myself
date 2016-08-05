import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

export let store = createStore(
  combineReducers(
    //require("./giphySearch/reducers"),
    require("./todo/reducers")
  ),
  {},
  compose(
    applyMiddleware(
      thunkMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
)

store.dispatch({
  type: "ADD_TODO",
  data: {
    text: "What the fuck ever",
    id: 1,
    completed: true
  }
});
console.log(store.getState())