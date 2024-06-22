import React, { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './Components/WebPages/Home'
import SellerHome from './Components/SellerPages/SellerHome' 
import SearchPage from './Components/WebPages/SearchPage'
import Cart from './Components/WebPages/Cart'
import WishLish from './Components/WebPages/WishLish'
import LogIn from './Components/WebPages/LogIn'
import Singup from './Components/WebPages/Singup'
import CreateProduct from './Components/SellerPages/CreateProduct'

const App = () => {       

  return (
    <div className='w-full min-h-screen'>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/user" element={<Singup/>} />
      <Route path="/logIn" element={<LogIn/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/wishlist" element={<WishLish/>} />
      <Route path="/cart" element={<Cart/>} />


      <Route path="/Seller" element={<SellerHome/>}/>
      <Route path="/Seller/product" element={<CreateProduct/>}/>
    </Routes>
 
    </div>
  )
}

export default App