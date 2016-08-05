import React from 'react';
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../logic/todoApp/actions";

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  )
}

export const FilterLink = connect(

  // Map Dispatch to props
  (state, props) => {
    return {
      active: props.filter === state.visibilityFilter
    }
  },

  // Mapping State to props
  (dispatch, props) => {
    return {
      onClick: () => {
        dispatch(setVisibilityFilter(props.filter))
      }
    }
  }
)(Link)