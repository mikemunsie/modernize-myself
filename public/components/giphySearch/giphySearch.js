import { Provider, connect } from "react-redux";
import React from 'react';

import * as Actions from "../../logic/giphySearch/actions";
import { Results } from "./results";
import { Search } from "./search";

require("./giphySearch.scss");

export const GiphySearch = () => {
  return (
    <div>
      <Search />
      <Results />
    </div>
  );
}