import React from 'react'
import TodoList from './TodoList'
import { useState, useEffect } from 'react';
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link } from 'react-router-dom';

const TodosList = () => {
    let [todos, setTodos] = useState([]);
    let { idUser, setIdUser } = useContext(UserContext);
console.log(idUser)

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
        <div className="menu">
        <Link className='click blue' to="/todosadd">Afegir Entrada</Link>
        </div>
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