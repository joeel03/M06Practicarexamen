import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useContext } from "react";
import { UserContext } from "./userContext";

const TodosAdd = () => {
  let { idUser, setIdUser } = useContext(UserContext);
  console.log(idUser)
  let [formulari, setFormulari] = useState({});
  let navigate = useNavigate();
  

  let { title, completed,userId=idUser } = formulari;
  const formData = new FormData;
  formData.append("userId", userId);

  formData.append("title", title);
  formData.append("completed", completed);


  const handleChange = (e) => {
    e.preventDefault();
    setFormulari({
      ...formulari,
      [e.target.name]: e.target.value
    })
    
  };
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:3004/todos", {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({userId:new Number(userId),
                            title: new String(title),
                            completed: new Boolean(completed)})
      });
      const resposta = await data.json();
        
        console.log(resposta)
        console.log("place creado")
        navigate("/todos/"+resposta.id)
     
      
    } catch(err) {
      console.log(err.message);
      alert("Catchch");
    };
  }
 

  return (
    <div>
    <div className="card ">
      <div className="card-header ">

        <h1 className="text-center h2 fw-bold">Crear todo</h1>

      </div >
      <form method="post" className="separar" enctype="multipart/form-data">
      
        <div className="form-group">
          <label for="title">title</label>
          <input type="text" value={formulari.title} onChange={handleChange} name="title" className="form-control" />
        </div>
        
        <div className="form-group">
            <label for="completed">completed</label>

            <select name="completed" value={formulari.completed} onChange={handleChange} className="form-control"  >
              <option value="true" >si</option>
              <option value="false" selected>no</option>
              </select>

          </div>

        <button className="btn btn-primary" onClick={(e) => {
          handleCreate(e);
        }}>Create</button>
           </form>
    </div>
  </div>
  )
}

export default TodosAdd