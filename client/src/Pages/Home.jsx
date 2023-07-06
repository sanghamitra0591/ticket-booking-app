import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const token= JSON.parse(localStorage.getItem("token"));

  const [initdata, setInitData]= useState({
    "destination" : "",
    "date" : ""
  })

  const navigate= useNavigate();

  const handleChange= (e) => {
    const value= e.target.value;
    const name= e.target.name;
    setInitData({...initdata, [name]: value});
  }

  const handleSearch= () => {
    if(token){
      if(initdata.destination!=="" && initdata.date!==""){
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
    <div style={{height: "90vh", backgroundColor: "#adad85", paddingTop: "30px"}}>
      <div style={{width: "80%", margin: "auto", backgroundColor: "white", borderRadius: "15px", padding: "30px"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <div>
            <h2>Delhi</h2>
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
              <option value="08-08-2023">8th July</option>
            </select>
          </div>
        </div>
        <div>
          <button onClick={()=>handleSearch()}>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Home
