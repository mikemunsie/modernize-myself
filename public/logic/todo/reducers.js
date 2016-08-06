let addTodo = (state, action) => [
  ...state,
  {
    id: action.data.id,
    text: action.data.text,
    completed: action.data.completed
  }
];

let toggleTodo = (state, action) => {
  if (state.id !== action.data.id) return state;
  return {
    ...state,
    completed: !state.completed
  };
}

export const Todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(state, action);
    case "TOGGLE_TODO":
      return state.map(state => toggleTodo(state, action));
    default:
      return state;
  }
}

export const Todos_VisibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}