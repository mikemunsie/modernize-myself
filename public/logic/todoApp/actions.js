let nextTodoId = 0;

export const addTodo = (value) => {
  return {
    type: "ADD_TODO",
    data: {
      text: value,
      id: nextTodoId++,
      completed: false
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: "TOGGLE_TODO",
    data: {
      id
    }
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter: filter
  }
};