import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  
  const navigate= useNavigate();

  const [initdata, setInitData]= useState({
    "email" : "",
    "password" : ""
  })

  const handleChange= (e) => {
    const value= e.target.value;
    const name= e.target.name;
    setInitData({...initdata, [name]: value});
  }

  const handleLogin= () => {
    if(initdata.email!=="" && initdata.password!==""){
        fetch(`https://agile-neckerchief-fox.cyclic.app/user/login`, {
          method: "POST",
          body: JSON.stringify(initdata),
          headers: {
            "Content-Type" : "application/json"
          }
      }).then((r)=>r.json())
      .then((r)=>{
        if(r.message==='User is not registered'){
          alert("User is not registered")
        }else if(r.message==="Login Successful"){
          alert("Login Sucessful");
          localStorage.setItem("token", JSON.stringify(r.token));
          navigate("/");
        }else{
          alert("Please enter correct password");
        }
      })
      .catch((e)=>console.log({"error":e}))
    }else{
      alert("Please fill all the input fields.")
    }
  }

  return (
    <div style={{marginTop:"30px"}}>
      <h1>Login</h1>
      <div style={{width:"40%", margin:"auto", padding:"50px"}}>
        <input style={{marginTop:"10px"}} name="email" type="email" onChange={handleChange} placeholder="Enter Email here" /><br/>
        <input style={{marginTop:"10px"}} name="password" type="text" onChange={handleChange} placeholder= "Enter Password here" /><br/>
        <button onClick={handleLogin} style={{marginTop:"10px"}}>Login</button>
      </div>
    </div>
  )
}

export default Login
