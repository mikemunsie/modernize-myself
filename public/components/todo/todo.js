import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { todos, visibilityFilter } from "./reducers";

// These are presentation components. Note how they don't have any functionality defined,
// just uses the functionality passed in and does what it wants with it.
const TodoItem = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {text}
  </li>
);


// TODO: COME BACK (https://egghead.io/lessons/javascript-redux-extracting-presentational-components-addtodo-footer-filterlink)
const Footer = ({
  visibilityFilter
}) => (
  <p>
    Show:
    <FilterLink
      filter="SHOW_ALL"
      currentFilter={visibilityFilter}
    >
      All
    </FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_ACTIVE"
      currentFilter={visibilityFilter}
    >
      Active
    </FilterLink>
    {' '}
    <FilterLink
      filter="SHOW_COMPLETED"
      currentFilter={visibilityFilter}
    >
      Completed
    </FilterLink>
  </p>
)

// Also a presentation component
const TodoList = ({
  todos,
  onClick
}) => (
  <ul>
    {todos.map(todo =>

      // Note the spread operator passes everything in about the todo item
      <TodoItem
        {...todo}
        key={todo.id}
        onClick={() => onClick(todo.id)}
      />
    )}
  </ul>
);

export const store = createStore(combineReducers({
  todos,
  visibilityFilter
}));

const AddTodo = ({ onClick }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        onClick(input.value);
        input.value = "";
      }}>
        Add Todo
      </button>
    </div>
  )
}

// Destructuring is really nice. This would have looked like (props.filter, props.currentFilter, etc.)
const FilterLink = ({
  filter,
  currentFilter,
  children
}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        store.dispatch({
          type: "SET_VISIBILITY_FILTER",
          filter
        });
      }}
    >
      {children}
    </a>
  )
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
}

export class Todo extends React.Component {
  constructor() {
    super();
    this.nextTodoId = 0;
  }
  render() {
    const { todos, visibilityFilter } = this.props;
    const visibleTodos = getVisibleTodos(todos, visibilityFilter);
    return (
      <div>
        <AddTodo
          onClick={(text) =>
            store.dispatch({
              type: "ADD_TODO",
              data: {
                text: text,
                id: this.nextTodoId++,
                completed: false
              }
            })
          }
        />
        <TodoList
          todos={visibleTodos}
          onClick={id =>
            store.dispatch({
              type: "TOGGLE_TODO",
              data: {
                id
              }
            })
          }
        />
        <br/>
      </div>
    )
  }
}