import React from 'react';
import * as Helpers from "./helpers";
import { TodoItem } from "./todoItem";

export class VisibleTodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }
  componentWillUnMount() {
    this.unsubscribe();
  }
  render() {
    const { store } = this.context;
    const props = this.props;
    const state = store.getState();
    return (
      <TodoList
        todos={
          Helpers.getVisibleTodos(
            state.todos,
            state.visibilityFilter
          )
        }
        onClick={id =>
          store.dispatch({
            type: "TOGGLE_TODO",
            data: {
              id
            }
          })
        }
      />
    )
  }
}
VisibleTodoList.contextTypes = {
  store: React.PropTypes.object
}

export const TodoList = ({
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
