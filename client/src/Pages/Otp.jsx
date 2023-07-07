import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Otp = () => {

    const token= JSON.parse(localStorage.getItem("token"));

    const [text, setText]= useState("");

    const navigate= useNavigate();

    const [data, setData]= useState([]);

    useEffect(()=>{
        getData();
    }, [])

    const getData= ()=>{
        fetch(`https://agile-neckerchief-fox.cyclic.app/cart`, {
              method: "GET",
              headers: {
                "Content-Type" : "application/json",
                "authorization" : token
              }
          }).then((r)=>r.json())
          .then((r)=>{
            setData(r);
          })
          .catch((e)=>console.log({"error":e}))
      }

    const handleChange= (e)=>{
        console.log(text);
        setText(e.target.value);
    }

    const handleOtp= ()=>{
        console.log(text);
        if(text.length===4){
            if(text=="1234"){
                for(let i=0;i<data.length;i++){
                  fetch(`https://agile-neckerchief-fox.cyclic.app/cart/delete/${data[i]._id}`, {
                        method: "DELETE",
                        headers: {
                          "Content-Type" : "application/json",
                          "authorization" : token
                        }
                    })
                }
                alert("Payment Successful");
                navigate("/");
            }else{
                setText("");
                alert("Please Enter the correct OTP");
            }
        }
        else{
            alert("Please fill 4 digits of OTP")
        }
    }

  return (
    <div style={{paddingTop: "70px", height: "88.5vh", background: "url(https://thumbs.gfycat.com/BogusAccomplishedAssassinbug-size_restricted.gif)"}}>
      <div style={{width: "40%", margin: "auto", marginTop: "10%"}}>
        <input style={{fontSize: "20px", padding: "10px"}} type="text" onChange={(e)=>handleChange(e)} value={text} placeholder='Enter OTP' />
        <br/>
        <br/>
        <button style={{fontSize: "18px", padding: "10px 20px"}} onClick={()=>handleOtp()}>Submit OTP</button>
      </div>
    </div>
  )
}

export default Otp
