import React from 'react';
import { connect } from "react-redux";
import { addTodo } from "./todoActions";

export let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        dispatch(addTodo(input.value));
        input.value = "";
      }}>
        Add Todo
      </button>
    </div>
  )
}

// The default is to not subscribe to the store and send the dispatch as a prop
AddTodo = connect()(AddTodo)