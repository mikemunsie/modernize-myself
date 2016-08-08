import React from 'react';
import { connect } from "react-redux";
import { TodoItem } from "./todoItem";
import * as Helpers from "./todoHelpers";
import { toggleTodo } from "./todoActions";

export const TodoList = ({
  todos,
  onClick
}) => (
  <ul>
    {todos.map(todo =>
      <TodoItem
        {...todo}
        key={todo.id}
        onClick={() => onClick(todo.id)}
      />
    )}
  </ul>
);

// Generate a container using react-redux connect for the TodoList Component
export const VisibleTodoList = connect(
  state => {
    return {
      todos: Helpers.getVisibleTodos(
        state.Todos,
        state.Todos_VisibilityFilter
      )
    }
  },
  dispatch => {
    return {
      onClick: id => dispatch(toggleTodo(id))
    }
  }
)(TodoList);