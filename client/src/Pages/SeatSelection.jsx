import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SeatSelection = () => {

    const token= JSON.parse(localStorage.getItem("token"));

    const navigate= useNavigate();

    const [seat, setSeat]= useState('');

    const data= JSON.parse(localStorage.getItem("tempcart"));


    const handleChange= (e)=>{
        if(seat==="" || e.target.style.backgroundColor==="skyblue"){
            e.target.style.backgroundColor==="skyblue" ? e.target.style.backgroundColor="white" : e.target.style.backgroundColor="skyblue";
            e.target.style.backgroundColor==="skyblue" ? setSeat(e.target.innerText) : setSeat("");
        }else{
            alert("You can choose only one seat, to select this one please unselect the previous one");
        }
    }

    const handleAddtoCart= ()=>{
        if(seat===""){
            alert("Please Choose your seat");
        }
        else{
            fetch(`https://agile-neckerchief-fox.cyclic.app/cart/add`, {
                method: "POST",
                body: JSON.stringify({...data, "ticket": {...data.ticket, seat}}),
                headers: {
                    "Content-Type" : "application/json",
                    "authorization" : token
                }
            }).then((r)=>r.json())
            .then((r)=>{
                localStorage.setItem("tempcart", JSON.stringify(""));
                alert("Added to Cart");
                navigate(`/`);
            })
            .catch((e)=>console.log({"error":e}))
        }
    }
    

  return (
    <div>
      <div style={{position: "relative", backgroundColor: "#b8c3d4"}}>
        <img style={{width: "100%"}} src="https://cdn1.vectorstock.com/i/1000x1000/04/45/outline-plane-top-view-airplane-vector-29560445.jpg" alt="flight" />
      </div>
      <div style={{position: "absolute", top: "50%", left: "45%", width:"10%", margin: "Auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "25px, 0px"}}>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>1</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>2</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>3</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>4</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>5</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>6</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>7</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>8</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>9</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>10</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>11</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>12</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>13</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>14</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>15</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>16</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>17</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>18</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>19</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>20</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>21</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>22</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>23</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>24</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>25</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>26</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>27</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>28</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>29</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>30</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>31</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>32</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>33</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>34</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>35</button>
        <button style={{margin: "20px 5px"}} onClick={(e)=>handleChange(e)}>36</button>
      </div>
      <div style={{position: "fixed", bottom: "0", padding: "10px", width: "100%", background: "url(https://wallpapers.com/images/hd/solid-background-4g6g57jjoqcmwr6u.jpg)"}}>
        <div style={{width: "85%", margin: "auto", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h1 style={{color: "white"}}>Seat number : - {seat}</h1>
            <button onClick={()=>handleAddtoCart()} style={{padding: '10px 15px', backgroundColor: "#b1c3de", color: "black", fontSize: "20px"}}>Proceed</button>
        </div>
      </div>
    </div>
  )
}

export default SeatSelection
