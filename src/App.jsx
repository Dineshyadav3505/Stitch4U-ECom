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
import Auth from './utils/Auth'
import New from './Components/WebPages/New'
import Profile from './Components/WebPages/Profile'
import Product from './Components/WebPages/Product'
import Cookies from 'js-cookie'
import CatagoreyCart from './Components/WebPages/CatagoreyCart'

const App = () => {       

  return (
    <div className='w-full min-h-screen'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<Singup/>} />
        <Route path="/signUp" element={<Singup/>} />
        <Route path="/logIn" element={<LogIn/>} />
        <Route path="/search" element={<SearchPage/>} />

        <Route path="/new" element={<New/>} />

        
        <Route path="/products/:type" element={<CatagoreyCart/>} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/products/:catgory/product/:id" element={<Product/>} />
        <Route path="/cart/product/:id" element={<Product/>} />
        <Route path="/new/product/:id" element={<Product/>} />
        <Route path="/wishlist/product/:id" element={<Product/>} />

        {/* Protected user Routes  */}
        <Route path="/cart" element={<Cart/>} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/wishlist" element={<WishLish/>} />

        {/* protected Salesman routes */}
        <Route path="/salesman" element={<SellerHome/>}/>
        <Route path="/Seller/product" element={<CreateProduct/>}/>
        <Route path="/Seller/product/ijhfg" element={<Auth/>}/>
      </Routes>
    </div>
  )
}

export default App