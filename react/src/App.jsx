import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginRegister from './LoginRegister/LoginRegister'
import TodosList from './TodosList'
import TodosAdd from './TodosAdd'
import Todos from './Todos'
import TodosEdit from './TodosEdit'
import { UserContext } from "./userContext";


function App() {
  let [idUser, setIdUser] = useState("");

  return (
    <UserContext.Provider value={{ idUser, setIdUser}}>
      <Routes>
      <Route path="/" element={<LoginRegister/>} />
      <Route path="/todoslist" element={<TodosList/>} />
      <Route path="/todosadd" element={<TodosAdd/>} />
      <Route path="/todos/:id" element={<Todos/>} />
      <Route path="/todos/edit/:id" element={<TodosEdit/>} />

      </Routes>
    </UserContext.Provider>

  )
}

export default App
