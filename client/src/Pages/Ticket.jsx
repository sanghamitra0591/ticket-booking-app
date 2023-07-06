import React, { useEffect, useState } from 'react'

const Ticket = () => {

  const token= JSON.parse(localStorage.getItem("token"));

  const {destination, date}= JSON.parse(localStorage.getItem("data"));

  const [data, setData] = useState([]);

  const [sortby, setSortby]= useState("");
  const [airline, setAirline]= useState("");

  useEffect(()=>{
    getData(sortby, airline);
  }, [sortby, airline]);

  const getData= (sortby, airline)=>{
    fetch(`https://agile-neckerchief-fox.cyclic.app/ticket?destination=${destination}&date=${date}&sort=${sortby}&airline=${airline}`, {
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

  const handleCart= (el, id)=>{
    fetch(`https://agile-neckerchief-fox.cyclic.app/cart/add`, {
          method: "POST",
          body: JSON.stringify({ticket: {...el, ticketId:id}, quantity:1}),
          headers: {
            "Content-Type" : "application/json",
            "authorization" : token
          }
      }).then((r)=>r.json())
      .then((r)=>{
        alert("Added to cart")
      })
      .catch((e)=>console.log({"error":e}))
  }

  return (
    <div>
      <div style={{width: "90%", margin: "auto"}}>
        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px"}}>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
            <h4>Sort</h4>
            <select name="sort" id="" onChange={(e)=>setSortby(e.target.value)}>
              <option value="">Sort by</option>
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
          <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
          <h4>Choose Airline</h4>
            <select name="airline" id="" onChange={(e)=>setAirline(e.target.value)}>
              <option value="">Choose</option>
              <option value="Indigo">Indigo</option>
              <option value="Air Asia">Air Asia</option>
              <option value="Akasa Air">Akasa Air</option>
            </select>
          </div>
        </div>
        {data && data.map((el)=>{
          return <div key={el._id} style={{border: "1px solid black", borderRadius: "10px", padding: "10px"}}>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px"}}>
              <div>
                <h2>{el.airline}</h2>
              </div>
              <div>
                <h3>{el.arrival}</h3>
                <p>Delhi</p>
              </div>
              <div>
                <p>{el.time.split(":")[0] +"h " +el.time.split(":")[1]+"m"}</p>
                <div style={{border: "1px solid green"}}></div>
                <p>{el.stops===0 ? "Non stop" : `${el.stops} stops`}</p>
              </div>
              <div>
                <h3>{el.departure}</h3>
                <p>{el.destination}</p>
              </div>
              <div>
                <h3>₹ {el.price}</h3>
                <p>Per traveller</p>
              </div>
              <div>
                <button onClick={()=>handleCart(el, el._id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        })}
        {data.length===0 && <div>No Flight Found</div>}
      </div>
    </div>
  )
}

export default Ticket
