import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Ticket from '../Pages/Ticket'
import Cart from '../Pages/Cart'
import SeatSelection from '../Pages/SeatSelection'
import Checkout from '../Pages/Checkout'
import Otp from '../Pages/Otp'

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/ticket/seat/:id" element={<SeatSelection />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/otp" element={<Otp />} />
    </Routes>
  )
}

export default MainRoute
