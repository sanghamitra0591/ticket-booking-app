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
    <div style={{position: "fixed",width: "100%", height: "70px", background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP-Jiao5UAETl74bzOzJ4Zqejhm0tMLl4M1g&usqp=CAU)"}}>
      {!token ? <div style={{width: "90%", margin: "auto", padding: "10px 0px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center"}}>
        <Link to="/"><img style={{height: "40px"}} src="https://flyclipart.com/thumb2/plane-ticket-png-icon-free-download-411543.png" alt="logo" /></Link>
        </div>
        <div style={{width: "30%", display: "flex", justifyContent: "space-between", alignItems: "center", color: "color"}}>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/">Home</Link>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/login">Login</Link>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/signup">Signup</Link>
        </div>
      </div> :
      <div style={{width: "90%", margin: "auto", padding: "10px 0px", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center"}}>
        <Link to="/"><img style={{height: "40px"}} src="https://flyclipart.com/thumb2/plane-ticket-png-icon-free-download-411543.png" alt="logo" /></Link>
        </div>
        <div style={{width: "30%", display: "flex", justifyContent: "space-between", alignItems: "center", color: "color"}}>
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/">Home</Link>
            {/* <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/ticket">Book Ticket</Link> */}
            <Link style={{color:"black", textDecoration:"none", fontSize:"21px"}} to="/cart">Cart</Link>
            <button style={{padding: "10px", backgroundColor: "#357187", color: "white", borderRadius: "10px"}} onClick={()=>handleLogout()}>Logout</button>
        </div>
      </div>
      }
    </div>
  )
}

export default Navbar