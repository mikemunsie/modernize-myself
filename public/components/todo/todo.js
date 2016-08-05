import React from 'react';
import { Provider } from "react-redux";
import { AddTodo } from "./addTodo";
import { Footer } from "./footer";
import { VisibleTodoList } from "./todoList";
import { store } from "../../logic/rootReducer";

console.log(store)

export const Todo = () => {
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