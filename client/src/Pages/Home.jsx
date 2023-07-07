import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const token= JSON.parse(localStorage.getItem("token"));

  const [initdata, setInitData]= useState({
    "destination" : "",
    "date" : ""
  })

  const [from, setFrom]= useState("");

  const navigate= useNavigate();

  const handleChange= (e) => {
    const value= e.target.value;
    const name= e.target.name;
    setInitData({...initdata, [name]: value});
  }

  const handleFrom= (e)=>{
    setFrom(e.target.value);
  }

  const handleSearch= () => {
    if(token){
      if(initdata.destination!=="" && initdata.date!=="" && from!==""){
        localStorage.setItem("data", JSON.stringify(initdata));
        navigate("/ticket");
      }else{
        alert("Please fill all the input fields.")
      }
    }else {
      alert("Please Login First");
      navigate("/login");
    }
  }

  return (
    <div style={{height: "95vh", paddingTop: "70px", background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqkdnv184NZJSy0g3xMfv-7GGg6y2PjbWKcQ&usqp=CAU)", paddingTop: "30px"}}>
      <div style={{width: "70%", margin: "auto", background: "url(https://media.istockphoto.com/id/1139678803/vector/horizontal-vector-illustration-of-an-empty-sky-blue-coloured-grungy-textured-background.jpg?s=612x612&w=0&k=20&c=tFTrwphz8pXtrmJGrEFBAnk9anQmRPHp3C8a3kQql7M=)", borderRadius: "15px", padding: "30px", marginTop: "100px"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h2>From</h2>
            <select name="from" id="" onChange={(e)=>handleFrom(e)}>
              <option value="">Select</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2>Destination</h2>
            <select name="destination" id="" onChange={(e)=>handleChange(e)}>
              <option value="">Select</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h2>Date</h2>
            <select name="date" id="" onChange={(e)=>handleChange(e)}>
              <option value="">Choose</option>
              <option value="07-07-2023">7th July</option>
              <option value="08-07-2023">8th July</option>
            </select>
          </div>
        </div>
        <div>
          <button style={{padding: "10px", backgroundColor: "#357187", color: "white", borderRadius: "10px"}} onClick={()=>handleSearch()}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Home
