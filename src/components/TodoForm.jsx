import React, { useState } from 'react'

var idTodo = 0;

export default function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({ id: "", task: "", complete: false });


    function handleInput(e) {
        setTodo({ ...todo, task: e.target.value })
    }

    function handleEnviar(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: idTodo++ })
            setTodo({ ...todo, task: "" })  
        }
    }




    return (
        <form onSubmit={handleEnviar}>

            <input type="text" value ={todo.task} onChange={handleInput} />
            <button type="submit">Enviar</button>

        </form>

    )
}
