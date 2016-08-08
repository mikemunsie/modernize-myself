export const TODO_ADD_TODO = 'TODO_ADD_TODO';
export const TODO_TOGGLE_TODO = 'TODO_TOGGLE_TODO';
export const TODO_SET_VISIBILITY_FILTER = 'TODO_SET_VISIBILITY_FILTER';

let nextTodoId = 0;

export const addTodo = (value) => {
  return {
    type: TODO_ADD_TODO,
    data: {
      text: value,
      id: nextTodoId++,
      completed: false
    }
  }
}

export const toggleTodo = (id) => {
  return {
    type: TODO_TOGGLE_TODO,
    data: {
      id
    }
  }
};

export const setVisibilityFilter = (filter) => {
  return {
    type: TODO_SET_VISIBILITY_FILTER,
    filter: filter
  }
};