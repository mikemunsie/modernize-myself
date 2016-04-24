// Next up: Continue from https://egghead.io/lessons/javascript-redux-extracting-container-components-visibletodolist-addtodo
import React from 'react';
import ReactDOM from 'react-dom';
import { Todo } from '../components/todo/todo';

const render = () => {
  ReactDOM.render(
    <Todo />,
    document.querySelector("#example")
  );
}
render();