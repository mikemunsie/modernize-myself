export const search = (state = {}, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        criteria: action.criteria
      };
    default:
      return state;
  }
}