import React, { useState, useEffect } from "react";
import "./style.css";

import axios from "axios";

function App(props) {

  const [login, setLogin] = useState(false);
  const[profile, setProfile] = useState(false)
  return (
    <>
    {!login ? (
      <Register setLogin={setLogin}/>
    ):(
      <Login setProfile ={setProfile}/>
    )}
    </> 
  ); 
}

// export default App;

function Register({ setLogin}){
  const register = () => {
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let number = document.getElementById("number").value;
    let response = axios.post("http://localhost:3000/api/register", {
      username,
      email,
      password,
      number
    });
    response.then((res)=> {
      alert(res.data);
      if(res.status==200){
        setLogin(true);
      }
    })
    .catch(error => {
      alert(error.response.data)
      console.log(error);
    })
  }
  return(
    <>
    <input type="text" name="username" id="username" placeholder="username"/><br/>
    <input type="password" name="password" id="password" placeholder="password"/><br/>
    <input type="email" name="email" id="email" placeholder="email"/><br/>
    <input type="number" name="number" id="number" placeholder="number"/><br/>
    <input type="submit" value="register" onClick={register}/>
    </>
  )   
  
}

function Login({ setProfile}){
  return(
    <>
    <input type="text" name="username" id="username" placeholder="username"/><br/>
    <input type="password" name="password" id="password" placeholder="password"/><br/>
    <input type="submit" value="login"/>
    </>
  )
}