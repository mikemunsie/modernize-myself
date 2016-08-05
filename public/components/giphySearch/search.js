import React from "react";
import { connect } from "react-redux";
import * as Actions from "../../logic/giphySearch/actions";

export let SearchComponent = ({ dispatch, stateCriteria }) => {
  let criteria = stateCriteria;
  return (
    <div className="giphySearch">
      <h1>Giphy Search: {stateCriteria}</h1>
      <label htmlFor="criteria">Search: </label>
      <input
        id="criteria"
        type="text"
        value={criteria}
        onChange={() => dispatch(Actions.fetchPosts(criteria.value))}
        ref={node => { criteria = node; }}
      />
    </div>
  )
}

export const Search = connect(
  state => {
    return {
      stateCriteria: state.criteria
    }
  }
)(SearchComponent)