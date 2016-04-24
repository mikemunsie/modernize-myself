import React from 'react';
import ReactDOM from 'react-dom';
import * as Helpers from "./helpers";
import { todos, visibilityFilter } from "./reducers";
import { AddTodo } from "./addTodo";
import { FilterLink } from "./filterLink";
import { Footer } from "./footer";
import { TodoList, VisibleTodoList } from "./todoList";
import { store } from "./store";

export class Todo extends React.Component {
  constructor() {
    super();
    this.nextTodoId = 0;
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    )
  }
  componentWillUnMount() {
    this.unsubscribe();
  }
  render() {
    let state = store.getState();
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
        <VisibleTodoList  />
        <br/>
        <Footer />
      </div>
    )
  }
}