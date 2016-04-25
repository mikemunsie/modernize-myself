// Next up: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
import React from 'react';
import ReactDOM from 'react-dom';
import { Todo } from '../components/todo/todo';

const render = () => {
  ReactDOM.render(
    <div>
      <Todo />
      <Todo />
      <Todo />
    </div>,
    document.querySelector("#example")
  );
}
render();