import React from "react";
import styles from "../Styles/Todo.module.css";

export const Todo = ({ todo, stateComplete, deleteTodo }) => {
  function handleCheck() {
    stateComplete(todo.id);
  }

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheck} />

      <div className ={
          styles.todo
      }
        style={{
          textDecoration: todo.complete ? "line-through" : "",
        }}
      >
        {todo.task}
      </div>
      <button className={styles.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
