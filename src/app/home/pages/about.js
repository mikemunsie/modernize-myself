import React from 'react';
import { layout as DefaultLayout } from "../../layouts/default/layout";
import CircularProgress from "../../../circularProgress/circularProgressComponent";

export let About = () => {
  return (
    <DefaultLayout>
      This is the about page.
      <br/>
      <br/>
      <CircularProgress
        strokeWidth="10"
        radius="80"
        percentage={30}
      />
      <br/>
      <br/>
      Its not even near complete bro.
    </DefaultLayout>
  )
}