import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Components/WebPages/Home'
import Navbar from './Components/OneTime Component/Navbar'
import Footer from './Components/OneTime Component/Footer'
import SearchPage from './Components/WebPages/SearchPage'
import Cart from './Components/WebPages/Cart'
import WishLish from './Components/WebPages/WishLish'
import LogIn from './Components/WebPages/LogIn'
import Singup from './Components/WebPages/Singup'

const App = () => {

  return (
    <div className='w-full min-h-screen'>

    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/user" element={<Singup/>} />
      <Route path="/logIn" element={<LogIn/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/wishlist" element={<WishLish/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    
    <Footer/>

    </div>
  )
}

export default App