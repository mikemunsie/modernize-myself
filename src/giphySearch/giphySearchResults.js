import { connect } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

const Result = (props) => (
  <div className="result">
    <img src={props.image.images.downsized.url} />
  </div>
)

const ResultsComponent = ({
  data
}) => {
  let results = data.length > 0 ?
    data.map((image, index) =>
      <Result key={index} image={image} />
    ) :
      <div>No results found :/</div>
  return (
    <div className="results">
      {results}
    </div>
  )
}

export const Results = connect(
  state => {
    return {
      data: state.GiphySearch.posts
    }
  }
)(ResultsComponent)