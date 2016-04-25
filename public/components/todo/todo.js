import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux';
import * as Helpers from "./helpers";
import * as Reducers from "./reducers";
import { AddTodo } from "./addTodo";
import { FilterLink } from "./filterLink";
import { Footer } from "./footer";
import { TodoList, VisibleTodoList } from "./todoList";
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