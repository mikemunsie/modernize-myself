import React from 'react';
import { layout as AuthLayout } from "../../layouts/auth/layout";
import { Todo } from "../../../todo/todoComponent";

export let Dashboard = () => {
  return (
    <AuthLayout>
      <Todo/>
    </AuthLayout>
  )
}