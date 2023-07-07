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
    <div style={{paddingTop: "70px", height: "88.5vh", background: "url(https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=2000)"}}>
      <div style={{width: "20%", margin: "auto", marginTop: "80px", padding: "30px", boxShadow: "xl", background: "url(https://media.istockphoto.com/id/1139678803/vector/horizontal-vector-illustration-of-an-empty-sky-blue-coloured-grungy-textured-background.jpg?s=612x612&w=0&k=20&c=tFTrwphz8pXtrmJGrEFBAnk9anQmRPHp3C8a3kQql7M=)", borderRadius: "30px"}}>
        <h1>Signup</h1>
        <div style={{width:"90%", margin:"auto", padding:"20px"}}>
          <input style={{marginTop:"10px"}} name="username" type="text" onChange={handleChange} placeholder="Enter Username here" /><br/>
          <input style={{marginTop:"10px"}} name="email" type="email" onChange={handleChange} placeholder="Enter Email here" /><br/>
          <input style={{marginTop:"10px"}} name="password" type="password" onChange={handleChange} placeholder= "Enter Password here" /><br/>
          <button onClick={handleSignup} style={{marginTop:"10px"}}>Signup</button>
        </div>
      </div>
    </div>
  )
}

export default Signup