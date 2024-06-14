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
    <div className='w-full h-16 px-4 flex justify-between items-center bg-[#FAF9F8] '>
      <NavLink to="/menu" className=" hover:text-zinc-200" onClick={ () =>{open} }>
        <img className='w-6' src="/img/Menu.svg" alt="" />
      </NavLink>  

      <h1 className="text-2xl"> STITCH
      <span>4</span>
      U</h1>
      
      <NavLink to="/search"> <img className='w-6' src="/img/Search.svg" alt="" /></NavLink>
    </div>

    
  </>
)}

export default Navbar