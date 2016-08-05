function search(criteria) {
  return {
    type: "SEARCH",
    criteria
  }
}

function receiveSearch(criteria, json) {
  return {
    type: "RECEIVE_SEARCH",
    criteria,
    posts: json
  }
}

export function fetchPosts(criteria) {
  return (dispatch) => {
    dispatch(search(criteria));
    setTimeout(() => {
      dispatch(receiveSearch(criteria, [{
        title: "Awesome"
      }]))
    }, 2000)
  };
}