import React from 'react';
import { layout as AuthLayout } from "../../../layouts/auth/layout";
import { Todo } from "../../../components/todo/todo";

export let Dashboard = () => {
  return (
    <AuthLayout>
      <Todo/>
    </AuthLayout>
  )
}