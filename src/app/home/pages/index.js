import React from 'react';
import { layout as DefaultLayout } from "../../layouts/default/layout";
import { GiphySearch } from "../../../giphySearch/giphySearchComponent";
import * as Actions from "../../../giphySearch/giphySearchActions";

export let Index = () => {
  return (
    <DefaultLayout>
      <GiphySearch criteria="Hamburger" />
    </DefaultLayout>
  )
}