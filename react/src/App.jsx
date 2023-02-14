import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import LoginRegister from './LoginRegister/LoginRegister'
import TodosList from './TodosList'
import TodosAdd from './TodosAdd'
import Todos from './Todos'
import TodosEdit from './TodosEdit'
import { UserContext } from "./UserContext";


function App() {
  let [idUser, setIdUser] = useState("");

  return (
    <>
      <UserContext.Provider value={{ idUser, setIdUser }}>
        {idUser ?

          <Routes>
            <Route path="/todoslist" element={<TodosList />} />
            <Route path="/todosadd" element={<TodosAdd />} />
            <Route path="/todos/:id" element={<Todos />} />
            <Route path="/todos/edit/:id" element={<TodosEdit />} />

          </Routes>
          :
          <LoginRegister />} 
    </UserContext.Provider>
    </>


  )
}

export default App
