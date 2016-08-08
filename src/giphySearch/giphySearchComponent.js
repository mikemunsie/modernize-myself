import { Provider, connect } from "react-redux";
import React from 'react';

import * as Actions from "./giphySearchActions";
import { Results } from "./giphySearchResults";
import { Search } from "./giphySearchSearch";

require("./giphySearch.scss");

export const GiphySearch = () => {
  return (
    <div className="giphySearch">
      <Search />
      <Results />
    </div>
  );
}