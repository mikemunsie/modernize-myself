import React from 'react';

let nextTodoId = 0;
export const AddTodo = (props, { store }) => {
  console.log(store)
  let input;
  return (
    <div>
      <input ref={node => {
        input = node;
      }}/>
      <button onClick={() => {
        store.dispatch({
          type: "ADD_TODO",
          data: {
            text: input.value,
            id: nextTodoId++,
            completed: false
          }
        })
        input.value = "";
      }}>
        Add Todo
      </button>
    </div>
  )
}
AddTodo.contextTypes = {
  store: React.PropTypes.object
};