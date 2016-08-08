import { LOADER_LOADING } from "./loaderActions";

const defaultState = {
  isLoading: false
}

export const Loading = (state = defaultState, action) => {
  switch (action.type) {
    case LOADER_LOADING:
      return {
        ...state,
        isLoading: action.state
      };
    default:
      return state;
  }
}