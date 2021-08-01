import React from 'react'


export const Todo = ({todo, stateComplete, deleteTodo}) => {

    function handleCheck(){
        stateComplete(todo.id)

    }
    
    function handleDelete(){
        deleteTodo(todo.id)
    }



    return (
        <div style={{display:"flex"}}>
            <input type="checkbox" onClick={handleCheck}/>


            
            <div style={{color:"white", textDecoration: todo.complete ? "line-through": "" }} >
                
                {todo.task}
            </div>
            <button onClick={handleDelete}>Eliminar</button>
            
        </div>
    )
}
