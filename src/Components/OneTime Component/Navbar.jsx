import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  function open() {
    const menuDiv = document.getElementById('menu');
    menuDiv.style.transform = 'translateX(0)';
  }
  function close() {
    const menuDiv = document.getElementById('menu');
    menuDiv.style.transform = 'translateX(-100%)';
  }

return (
  <>
    <div className='fixed w-full h-16 px-4 md:px-8 flex justify-between items-center bg-[#FAF9F8] shadow-xl '>
      <NavLink to="/menu" className=" hover:text-zinc-200" onClick={ () =>{open} }>
        <img className='w-6' src="/img/Menu.svg" alt="" />
      </NavLink>  

      <h1 className="text-2xl"> STITCH
      <span>4</span>
      U</h1>
      
      <div className="flex justify-between items-center md:gap-5">
      <NavLink to="/user">    <img className='w-6 hidden md:block' src="/img/user.svg" alt="" /></NavLink>
      <NavLink to="/search">   <img className='w-6        md:block' src="/img/Search.svg" alt="" /></NavLink>
      <NavLink to="/wishlist"> <img className='w-6 hidden md:block' src="/img/heart.svg" alt="" /></NavLink>
      <NavLink to="/cart">     <img className='w-6 hidden md:block' src="/img/cart.svg" alt="" /></NavLink>
      </div>
    </div>

    <div className="fixed bottom-0 w-full h-16 px-6 flex justify-between items-center bg-[#FAF9F8] drop-shadow-[0_-35px_35px_rgba(0,0,0,0.3)] md:hidden">
        <NavLink to="/">         <img className='w-6' src="/img/home.svg" alt="" /></NavLink>
        <NavLink to="/new">      <img className='w-6' src="/img/new.svg" alt="" /></NavLink>
        <NavLink to="/wishlist"> <img className='w-6' src="/img/heart.svg" alt="" /></NavLink>
        <NavLink to="/cart">     <img className='w-6' src="/img/cart.svg" alt="" /></NavLink>
        <NavLink to="/logIn">    <img className='w-6' src="/img/user.svg" alt="" /></NavLink>
    </div>

    
  </>
)}

export default Navbar