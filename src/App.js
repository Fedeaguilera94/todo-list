import "./App.css";
import { useState } from "react";
import TodoForm from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]); // {[todo], [todo]}    ,set()

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function stateComplete(id) {
    setTodos(
      todos.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            complete: !task.complete,
          };
        }
        return task;
      })
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((task) => task.id !== id));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>

        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} stateComplete={stateComplete} deleteTodo = {deleteTodo}/>
      </header>
    </div>
  );
}

export default App;
