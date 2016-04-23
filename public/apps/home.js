// Next up: See todo.js and continue tutorial on extracting presentation
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