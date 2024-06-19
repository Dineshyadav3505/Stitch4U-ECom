import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryCard = ({
    id,
    img="https://www.snitch.co.in/cdn/shop/files/4MST2375-01-M24.jpg?v=1718775027&width=720",
    Category="POLos"

}) => {
  return (
    <NavLink to={`product/${id}`} className=' relative h-56 w-40 rounded-lg overflow-hidden '>
        <div className="w-full h-full overflow-hidden">
            <img className='w-full h-full object-fill' src={`${img}`} alt="" />
            <h3 className= 'absolute bottom-3 left-3 text-white font-bol font-1 text-sm uppercase'>{`${Category}`}</h3>
        </div>
    </NavLink> 
)}

export default CategoryCard