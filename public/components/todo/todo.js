import React from 'react';
import { Provider } from "react-redux";
import { AddTodo } from "./addTodo";
import { Footer } from "./footer";
import { VisibleTodoList } from "./todoList";

export const Todo = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList  />
      <Footer />
    </div>
  );
}