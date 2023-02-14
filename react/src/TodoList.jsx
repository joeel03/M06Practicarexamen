import React from 'react'

const TodoList = ({todo}) => {
  return (
    <>
       <td>{todo.userId}</td>
    <td>{todo.id}</td>
    <td>{todo.title}</td>

    {todo.completed?
    <td>si</td>:<td>no</td>}
    </>
   )
}

export default TodoList