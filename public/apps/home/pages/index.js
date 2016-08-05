import React from 'react';
import { layout as DefaultLayout } from "../../../layouts/default/layout";
import { GiphySearch } from "../../../components/giphySearch/giphySearch";

export let Index = () => {
  return (
    <DefaultLayout>
      <GiphySearch/>
    </DefaultLayout>
  )
}