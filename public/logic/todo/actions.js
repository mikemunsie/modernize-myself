import { TODO_ADD_TODO, TODO_TOGGLE_TODO, TODO_SET_VISIBILITY_FILTER } from "../../constants/actions";

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