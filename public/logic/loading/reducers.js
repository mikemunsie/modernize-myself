const defaultState = {
  isLoading: false
}

export const Loading = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: action.state
      };
    default:
      return state;
  }
}