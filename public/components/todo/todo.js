import React from 'react';
import { combineReducers, createStore } from 'redux';
import * as Reducers from "../../providers/todoApp/reducers";
import { AddTodo } from "./addTodo";
import { Footer } from "./footer";
import { VisibleTodoList } from "./todoList";
import { Provider } from "react-redux";

export const Todo = () => {
  let store = createStore(combineReducers(Reducers), {}, window.devToolsExtension ? window.devToolsExtension() : undefined)
  return (
    <Provider store={store}>
      <div>
        <AddTodo />
        <VisibleTodoList  />
        <Footer />
      </div>
    </Provider>
  );
}