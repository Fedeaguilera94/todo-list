import React from "react";
import { Todo } from "./Todo";

export const TodoList = ({ todos, stateComplete, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          stateComplete={stateComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
