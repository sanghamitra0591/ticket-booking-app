import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const token= JSON.parse(localStorage.getItem("token"));

  const [data, setData]= useState([]);

  const [total, setTotal]= useState(0);

  const navigate= useNavigate();

  useEffect(()=>{
    getData();
  }, []);

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
        setTotal(r.reduce((acc, el)=> acc+(+el.ticket.price), 0));
      })
      .catch((e)=>console.log({"error":e}))
  }

  const handleRemove= (id)=>{
    fetch(`https://agile-neckerchief-fox.cyclic.app/cart/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type" : "application/json",
            "authorization" : token
          }
      }).then((r)=>r.json())
      .then((r)=>{
        alert("Ticket removed from Cart");
        getData();
      })
      .catch((e)=>console.log({"error":e}))
  }

  const handleCheckout= ()=>{
    localStorage.setItem("total", JSON.stringify(total));
    navigate("/checkout");
  }


  return (
    <div style={{paddingTop: "90px", height: "85vh", background: "url(https://media.istockphoto.com/id/1341107435/vector/abstract-cover-design-with-light-blue-gradient-and-thin-lines-a3.jpg?s=612x612&w=0&k=20&c=xQGg2wVY_-w72OhvbwQkbDgRLuahQ3DKrg0iaCv3eW8=)"}}>
      {data.length!==0 && <div>
        <div>
          <div style={{width: "30%", margin: "auto", textAlign: "center", marginBottom: "15px"}}>
            <button onClick={()=>handleCheckout()} style={{fontSize: "20px", padding: "5px", backgroundColor: "black", color: "white"}}>Checkout</button>
          </div>
        </div>
        <div style={{display: "flex", alignItems: "flex-start", marginBottom: "15px", height: "85vfh", background: "url(https://media.istockphoto.com/id/1341107435/vector/abstract-cover-design-with-light-blue-gradient-and-thin-lines-a3.jpg?s=612x612&w=0&k=20&c=xQGg2wVY_-w72OhvbwQkbDgRLuahQ3DKrg0iaCv3eW8=)"}}>
          <div style={{width: "60%", padding: "20px"}}>
            {data && data.map((el)=>{
              return <div key={el._id} style={{border: "1px solid black", borderRadius: "10px", padding: "10px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px"}}>
                  <div>
                    <h2>{el.ticket.airline}</h2>
                  </div>
                  <div>
                    <h3>{el.ticket.arrival}</h3>
                    <p>Delhi</p>
                  </div>
                  <div>
                  <p>{el.ticket.time.split(":")[0] +"h " +el.ticket.time.split(":")[1]+"m"}</p>
                    <div style={{border: "1px solid green"}}></div>
                    <p>{el.ticket.stops===0 ? "Non stop" : `${el.ticket.stops} stops`}</p>
                  </div>
                  <div>
                    <h3>{el.ticket.departure}</h3>
                    <p>{el.ticket.destination}</p>
                  </div>
                  <div>
                    <h3>₹ {el.ticket.price}</h3>
                    <p>Per traveller</p>
                  </div>
                  <div>
                    <h2>{el.ticket.seat}</h2>
                    <p>Seat no</p>
                  </div>
                  <div>
                    <button style={{padding: "10px", backgroundColor: "#357187", color: "white", borderRadius: "10px"}} onClick={()=>handleRemove(el._id)}>Remove</button>
                  </div>
                </div>
              </div>
            })}
          </div>
          <div style={{width: "25%", margin : "auto", marginTop: "10px", padding: "20px", border: "1px solid black", borderRadius: "20px", textAlign: "center"}}>
            <div>
              <h4>Total Price:</h4>
              <h4>{total}</h4>
            </div>
            <div>
              <h4>Convenience Fee:</h4>
              <h4>310 * {data.length} = {310 * data.length}</h4>
            </div>
            <div>
              <h4>Total Payment</h4>
              <h4>{(310*data.length)+total}</h4>
            </div>
          </div>
        </div>
      </div>}
      {data.length===0 && <div>Cart is Empty</div>}
    </div>
  )
}

export default Cart

{/* <p>{el.ticket.time.split(":")[0] +"h " +el.ticket.time.split(":")[1]+"m"}</p> */}