// Next Up: https://egghead.io/lessons/javascript-redux-extracting-presentational-components-todo-todolist
import React from 'react';
import ReactDOM from 'react-dom';
import { Todo, store as TodoStore } from '../components/todo/todo';

const render = () => {
  ReactDOM.render(
    <Todo
      {...TodoStore.getState()}
    />,
    document.querySelector("#example")
  );
}
TodoStore.subscribe(render);
render();