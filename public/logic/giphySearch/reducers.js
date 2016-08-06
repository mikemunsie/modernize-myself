const defaultState = {
  criteria: "",
  posts: []
}

export const GiphySearch = (state = defaultState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        criteria: action.criteria
      };
    case "RECEIVE_SEARCH":
      return {
        ...state,
        posts: action.posts
      }
    default:
      return state;
  }
}