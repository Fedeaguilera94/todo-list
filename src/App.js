import "./App.css";

import TodoForm from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import useStickyState from "./lib";

function App() {
  const [todos, setTodos] = useStickyState([], "todos"); // {[todo], [todo]}    ,set()

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

  function editTodo(id, newData) {
    // { id: "", task: "", complete: false }
    setTodos(
      todos.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            task: newData,
          };
        }
        return task;
      })
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>

        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          stateComplete={stateComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </header>
    </div>
  );
}

export default App;
