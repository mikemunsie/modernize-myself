import React from 'react';
import { Provider } from "react-redux";
import { AddTodo } from "./todoAddTodo";
import { Footer } from "./todoFooter";
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