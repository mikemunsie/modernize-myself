import React from 'react';
import { combineReducers, createStore } from 'redux';
import * as Reducers from "./reducers";
import { AddTodo } from "./addTodo";
import { Footer } from "./footer";
import { VisibleTodoList } from "./todoList";
import { Provider } from "react-redux";

export const Todo = () => (
  <Provider store={createStore(combineReducers(Reducers))}>
    <div>
      <AddTodo />
      <VisibleTodoList  />
      <Footer />
    </div>
  </Provider>
);