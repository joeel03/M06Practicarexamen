import React, { useEffect } from 'react'
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "./userContext";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

const TodosEdit = () => {
  let navigate = useNavigate();
  let [formulari, setFormulari] = useState({});
  let { idUser, setIdUser } = useContext(UserContext);
  let [error, setError] = useState("");
  const { id } = useParams();
  let [loading, setLoading] = useState(true);
  let [todo, setTodo] = useState([])

  const getTodos = async () => {
    try {
      console.log(id)
      const data = await fetch(("http://localhost:3004/todos/" + id), {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "GET",
      });
      const resposta = await data.json();
        console.log(resposta)
        setLoading(false);
        setTodo(resposta)
        setFormulari({userId:resposta.userId,
          title:resposta.title,
          completed:resposta.completed,
      })
    } catch (err) {
      console.log(err.message);
      alert("Catchch");
    };
  }
  useEffect(() => {
    getTodos();
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
   
      setFormulari({
        ...formulari,
        [e.target.name]: e.target.value
      })
  };

  let { title, completed,userId } = formulari;
  const formData = new FormData;
  formData.append("userId", userId);
  formData.append("title", title);
  formData.append("completed", completed);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch("http://localhost:3004/todos/"+id, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: "PUT",
        body: JSON.stringify({userId:new Number(userId),
                            title: new String(title),
                            completed: new Boolean(completed)})
      });
      const resposta = await data.json();
        console.log(resposta)
        console.log("place actu")
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

        <h1 className="text-center h2 fw-bold">editar todo</h1>

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
              <option value="false" >no</option>
              </select>

          </div>

        <button className="btn btn-primary" onClick={(e) => {
          handleUpdate(e);
        }}>Update</button>
           </form>
    </div>
  </div>  )
}

export default TodosEdit