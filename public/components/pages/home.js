import React from 'react';
import { layout as DefaultLayout } from "../layouts/default/layout";
import { GiphySearch } from "../giphySearch/giphySearch";

export let Home = () => {
  return (
    <DefaultLayout>
      <GiphySearch/>
    </DefaultLayout>
  )
}