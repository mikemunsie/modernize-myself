import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../logic/giphySearch/actions";

export let SearchComponent = ({ dispatch, stateCriteria }) => {
  let searchNode;
  let debouncedSearch = _.debounce(search, 400);

  function search(criteria) {
    dispatch(Actions.fetchPosts(criteria))
  }

  function update() {
    debouncedSearch(searchNode.value);
  }

  return (
    <div className="giphySearch">
      <h1>Giphy Search: {stateCriteria}</h1>
      <label htmlFor="criteria">Search: </label>
      <input
        id="criteria"
        type="text"
        defaultValue={stateCriteria}
        onChange={() => update() }
        ref={node => { searchNode = node; }}
      />
    </div>
  )
}

export const Search = connect(
  state => {
    return {
      stateCriteria: state.GiphySearch.criteria
    }
  }
)(SearchComponent)