import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate= useNavigate();

  const [initdata, setInitData]= useState({
    "username" : "",
    "email" : "",
    "password" : ""
  })

  const handleChange= (e) => {
    const value= e.target.value;
    const name= e.target.name;
    setInitData({...initdata, [name]: value});
  }

  const handleSignup= () => {
    if(initdata.username!=="" && initdata.email!=="" && initdata.password!==""){
        fetch(`https://agile-neckerchief-fox.cyclic.app/user/signup`, {
          method: "POST",
          body: JSON.stringify(initdata),
          headers: {
            "Content-Type" : "application/json"
          }
      }).then((r)=>r.json())
      .then((r)=>{
        alert("Successfully Signed up");
        navigate("/login");
      })
      .catch((e)=>console.log({"error":e}))
    }else{
      alert("Please fill all the input fields.")
    }
  }

  return (
    <div style={{marginTop:"30px"}}>
      <h1>Signup</h1>
      <div style={{width:"40%", margin:"auto", padding:"50px"}}>
        <input style={{marginTop:"10px"}} name="username" type="text" onChange={handleChange} placeholder="Enter Username here" /><br/>
        <input style={{marginTop:"10px"}} name="email" type="email" onChange={handleChange} placeholder="Enter Email here" /><br/>
        <input style={{marginTop:"10px"}} name="password" type="text" onChange={handleChange} placeholder= "Enter Password here" /><br/>
        <button onClick={handleSignup} style={{marginTop:"10px"}}>Signup</button>
      </div>
    </div>
  )
}

export default Signup