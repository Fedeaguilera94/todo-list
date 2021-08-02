import React from 'react'
import {Todo} from "./Todo"

export const TodoList = ({todos, stateComplete, deleteTodo, editTodo}) => {
    return (
        <ul>
            {todos.map((todo) => (
                
                <Todo todo={todo} key={todo.id} stateComplete={stateComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
                
            ))
        }
        {console.log(todos)}
            

        </ul>
    )
}
