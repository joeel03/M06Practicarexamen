import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
const Header = () => {
    let { idUser, setIdUser } = useContext(UserContext);
   
    const sendLogout = async (e) => {
        e.preventDefault();
        try {
            
            setIdUser("")
        }catch{
            console.log("Error");
            alert("Catchch");
          };
      
    }  
    return (
    <button className="btn btn-primary btn-block mb-4" 
    onClick={() => {setIdUser("")}}>logout </button>
)
}

export default Header
