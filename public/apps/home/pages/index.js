import React from 'react';
import { layout as DefaultLayout } from "../../../layouts/default/layout";
import { GiphySearch } from "../../../components/giphySearch/giphySearch";
import * as Actions from "../../../logic/giphySearch/actions";

export let Index = () => {
  return (
    <DefaultLayout>
      <GiphySearch criteria="Hamburger" />
    </DefaultLayout>
  )
}