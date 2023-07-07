import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

  const navigate= useNavigate();

  const total= JSON.parse(localStorage.getItem("total"));

  const [initdata, setInitData]= useState({
    number: "",
    name: "",
    exp: ""
  })

  const handleChange= (e)=>{
    const value= e.target.value;
    const name= e.target.name;
    setInitData({...initdata, [name]: value});
  }

  const handlePay= ()=>{
    if(initdata.number!=="" && initdata.name!=="" && initdata.exp!==""){
      navigate("/otp");
    }else {
      alert("Please fill the card details.")
    }
  }

  return (
    <div style={{paddingTop: "70px", height: "88.5vh", background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7PGRiHzj5gePUbcz8ulAbiF-qLhVkgiAvg&usqp=CAU)"}}>
      <div style={{width: "40%", margin: "auto", backgroundColor: "white", padding: "10px"}}>
        <div>
          <h2>Your total is:- ₹ {total}</h2>
          <h4>Please fill your Card Details to confirm booking</h4>
          <div style={{position: "relative"}}>
            <img src="https://t3.ftcdn.net/jpg/03/95/04/64/360_F_395046410_zPvTifXj16lprkYLFSN5Yeweaquzc4CR.jpg" alt="debitcard" />
          </div>
          <div style={{position: "absolute", top: "50%", left: "47%"}}>
            <input style={{background: "none", outline: 'none', border: "none", fontSize: "20px", color: "white"}} type="text" placeholder='0000 0000 0000' name="number" onChange={(e)=>handleChange(e)} /><br/><br/>
            <input style={{background: "none", outline: 'none', border: "none", fontSize: "20px", color: "white"}} type="text" placeholder='CARD HOLDER' name="name" onChange={(e)=>handleChange(e)} /><br/><br/>
            <input style={{background: "none", outline: 'none', border: "none", fontSize: "20px", color: "white"}} type="text" placeholder='EXP'name="exp" onChange={(e)=>handleChange(e)} /><br/><br/>
          </div>
          <div>
            <button style={{padding: "10px 20px", fontSize: "21px", backgroundColor:"black", color: "white"}} onClick={()=>handlePay()}>Pay</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
