import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const SideMenu = props => {
  return (
    <div className="menu absolute min-h-screen w-[350px] md:w-[450px] lg:w-[650px] bg-[#FAF9F8] top-0 left-0 px-5 pt-5 ">
      <NavLink to="/" className="flex justify-end"> <img src="/public/img/close.svg" alt="" /></NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  New Arrivals</NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Best Selling </NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Suits & Blazers</NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Shop</NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Track order</NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Place A Return/Exchange Request </NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Customer Support</NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Visit Store</NavLink>
      <NavLink to="/" className="font-1 text-sm py-3 capitalize tracking-wider flex items-center hover:text-red-400" > <span className=' block h-12 w-12 bg-zinc-900 rounded-full mr-3 '></span>  Relove</NavLink>
    </div>
  )
}

SideMenu.propTypes = {}

export default SideMenu