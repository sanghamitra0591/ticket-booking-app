import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const token= JSON.parse(localStorage.getItem("token"));

  const navigate= useNavigate();

  const handleLogout= ()=>{
    localStorage.setItem("token", JSON.stringify(""));
    navigate("/");
  }
  
  
  return (
    <div style={{backgroundColor: "#ccccb3"}}>
      {!token ? <div style={{width: "90%", margin: "auto", padding: "10px 0px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center"}}>
        <Link to="/"><img style={{height: "40px"}} src="https://static.vecteezy.com/system/resources/previews/001/189/272/non_2x/ticket-png.png" alt="logo" /></Link>
        </div>
        <div style={{width: "30%", display: "flex", justifyContent: "space-between", alignItems: "center", color: "color"}}>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/">Home</Link>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/login">Login</Link>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/signup">Signup</Link>
        </div>
      </div> :
      <div style={{width: "90%", margin: "auto", padding: "10px 0px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center"}}>
        <Link to="/"><img style={{height: "40px"}} src="https://static.vecteezy.com/system/resources/previews/001/189/272/non_2x/ticket-png.png" alt="logo" /></Link>
        </div>
        <div style={{width: "30%", display: "flex", justifyContent: "space-between", alignItems: "center", color: "color"}}>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/">Home</Link>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/ticket">Book Ticket</Link>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/cart">Cart</Link>
            <button onClick={()=>handleLogout()}>Logout</button>
        </div>
      </div>
      }
    </div>
  )
}

export default Navbar