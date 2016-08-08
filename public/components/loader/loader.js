import React from 'react';
import { connect } from "react-redux";
require("./loader.scss");

const LoaderContainer = ({
  isLoading
}) => {
  return (
    <div className="loader" style={{
      display: isLoading ? "block" : "none"
    }}>
    </div>
  );
}

export const Loader = connect(
  state => {
    return {
      isLoading: state.Loading.isLoading
    }
  }
)(LoaderContainer)