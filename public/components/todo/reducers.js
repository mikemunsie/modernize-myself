export const todo = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        id: action.data.id,
        text: action.data.text,
        completed: action.data.completed
      }
    case "TOGGLE_TODO":
      if (state.id !== action.data.id) return state;
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
}

export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        todo(undefined, action)
      ];
    case "TOGGLE_TODO":
      return state.map(t => todo(t, action));
    default:
      return state;
  }
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
}