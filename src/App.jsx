import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Components/WebPages/Home'
import Navbar from './Components/OneTime Component/Navbar'
import Footer from './Components/OneTime Component/Footer'
import SearchPage from './Components/WebPages/SearchPage'
import Cart from './Components/WebPages/Cart'
import WishLish from './Components/WebPages/WishLish'
import UserCreate from './Components/WebPages/UserCreate'
import UserLogin from './Components/WebPages/UserLogin'
// import { useDispatch } from 'react-redux'

const App = () => {

  const [loading, setLoading] = useState(true)
  // const dispatch = useDispatch()

  return (
    <div className='w-full min-h-screen'>

    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/user" element={<UserCreate/>} />
      <Route path="/logIn" element={<UserLogin/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/wishlist" element={<WishLish/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    
    <Footer/>

    </div>
  )
}

export default App