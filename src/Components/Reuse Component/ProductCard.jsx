import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (
    {
        id,
        img,
        title,
        price,
        fit,
    }
) => {
  return (
    <NavLink to={`product/${id}`} className='h-72 w-36 '>
        <div className="w-full h-52 overflow-hidden">
            <img className='w-full h-full object-fill' src="https://www.snitch.co.in/cdn/shop/files/4MST2375-01-M24.jpg?v=1718775027&width=720" alt="" />
        </div>
        <div className="py-1 px-2">
            <h3 className='text-black font-bol font-1 text-sm'>jet Black Jeans</h3>
            <h3 className='text-black font-bol font-2 text-sm'> Polo T-Shirt INR 1,699</h3>
            <h3 className='text-black font-bol font-2 text-sm'>Colour : Black </h3>
            <h3 className='text-black font-bol font-2 text-sm'>Fit Pant</h3>
        </div>

    </NavLink> 
  )
}

export default Card