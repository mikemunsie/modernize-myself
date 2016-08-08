import request from "superagent";
import { isLoading } from "../loading/actions"

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
    dispatch(isLoading(true));
    request.get("http://api.giphy.com/v1/gifs/search?q=" + criteria + "&api_key=dc6zaTOxFJmzC&limit=5")
    .accept('json')
    .end((err, {body}) => {
      this.giphySearchCall = false;
      dispatch(receiveSearch(criteria, body.data));
      dispatch(isLoading(false));
    });
  };
}