import _ from 'lodash';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const testArray = [
  {
    name: "Hello",
    value: "I'm a test"
  }
];
const testArray2 = [
  ...testArray,
  {
    name: "Hello 2",
    value: "I'm a test 2"
  }
]

console.log(testArray2);

const counter = (state, action) => {

  // Define the initial state of the application
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

let store = createStore(counter);

const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <br/>
    <input type="button" value="Increment" onClick={onIncrement} />
    <br/>
    <input type="button" value="Decrement" onClick={onDecrement} />
  </div>
);

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    onIncrement={() =>
      store.dispatch({
        type: "INCREMENT"
      })
    }
    onDecrement={() =>
      store.dispatch({
        type: "DECREMENT"
      })
    }
  />,
  document.getElementById("example")
)

store.subscribe(render);

store.dispatch({ type: 'INCREMENT' });
console.log(store.getState());
store.dispatch({ type: 'DECREMENT' });
console.log(store.getState());
//store.dispatch({ type: 'DECREMENT' })