import React from 'react'
import TodoList from './TodoList'
import { useState, useEffect } from 'react';

const TodosList = () => {
    let [todos, setTodos] = useState([]);

    const getTodos = async () => {
        try {
            const data = await fetch("http://localhost:3004/todos/", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "GET",
            });
            const resposta = await data.json();
         
                console.log(resposta)
                setTodos(resposta);
            
            
        } catch {
            console.log("Error");
            alert("Catchch");
        };
    }
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <div>
        <h1>todo List</h1>
        <table>
            <tr>
                <th>UserId</th>
                <th>id</th>
                <th>title</th>
                <th>completed</th>

            </tr>
            {todos.map((todo) => (
                    <tr key={todo.id}> 
            
                    {<TodoList todo={todo} />}
                    </tr>
                    
            ))}
        </table>




    </div>
  )
}

export default TodosList