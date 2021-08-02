import React from "react";

export const Todo = ({ todo, stateComplete, deleteTodo, editTodo }) => {
  const [isEdit, setIsEdit] = React.useState(false);
  const [text, setText] = React.useState("");

  function handleCheck() {
    stateComplete(todo.id);
  }

  function handleDelete() {
    deleteTodo(todo.id);
  }

  function hadnleEdit() {
    setIsEdit(!isEdit);
    setText(todo.task)
  }

  function handleSave() {
    editTodo(todo.id, text);
    setIsEdit(!isEdit)
  }

  function handleOnChange(e){
    setText(e.target.value)

  }
  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={handleCheck} />

      <div
        style={{
          color: "white",
          textDecoration: todo.complete ? "line-through" : "",
        }}
      >
        {isEdit ? <input value={text} onChange={handleOnChange} placeholder={todo.task}></input> : todo.task}
      </div>
      {isEdit ? (
        <button onClick={handleSave}>Guardar</button>
      ) : (
        <button onClick={handleDelete}>Eliminar</button>
      )}
      {isEdit?<button onClick={hadnleEdit}>Cancelar</button>:<button onClick={hadnleEdit}>Editar</button>}
    </div>
  );
};
