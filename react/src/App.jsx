import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginRegister from './LoginRegister/LoginRegister'
import TodosList from './TodosList'
import TodosAdd from './TodosAdd'
import Todos from './Todos'
import TodosEdit from './TodosEdit'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<LoginRegister/>} />

    <Route path="/todoslist" element={<TodosList/>} />
    <Route path="/todosadd" element={<TodosAdd/>} />
    <Route path="/todos/:id" element={<Todos/>} />
    <Route path="/todos/edit/:id" element={<TodosEdit/>} />

    </Routes>
    
  )
}

export default App
