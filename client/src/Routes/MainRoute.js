import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Ticket from '../Pages/Ticket'
import Ticketdetails from '../Pages/Ticketdetails'
import Cart from '../Pages/Cart'

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/ticket/:id" element={<Ticketdetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default MainRoute
